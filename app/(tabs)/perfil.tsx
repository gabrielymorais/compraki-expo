import { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { auth, db } from '../../services/firebase/config';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

export default function PerfilScreen() {
  const router = useRouter();
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          if (userDoc.exists()) {
            setUserData(userDoc.data());
          }
        } catch (error) {
          console.log('Erro ao buscar dados do usuário:', error);
        }
      } else {
        router.replace('/login');
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.replace('/login');
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível sair da conta.');
    }
  };

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#FF9900" />
      </View>
    );
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.container}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/500' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>{userData?.nome || 'Usuário'}</Text>
        <Text style={styles.email}>{userData?.email || 'email@exemplo.com'}</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Editar Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 100,
    paddingHorizontal: 30,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF9900',
    marginBottom: 5,
  },
  email: {
    fontSize: 14,
    color: '#888',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#FF9900',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 20,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logoutButton: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
    backgroundColor: '#eee',
    width: '100%',
  },
  logoutText: {
    color: '#444',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
