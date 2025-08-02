import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Stack, useRouter } from 'expo-router';

export default function PerfilScreen() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.container}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/500' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Gaby e Mandy</Text>
        <Text style={styles.email}>gabyemandy@email.com</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Editar Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutButton} onPress={() => router.replace('/login')}>
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
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  logoutButton: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
    backgroundColor: '#eee',
  },
  logoutText: {
    color: '#444',
    fontWeight: 'bold',
  },
});
