import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function SelectProfileScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Escolha o seu tipo de{'\n'}perfil no app</Text>

      <TouchableOpacity style={styles.clientButton} onPress={() => router.push('/login')}>
        <Text style={styles.clientButtonText}>Cliente</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.marketButton} onPress={() => {/* router.push('/login-mercado') futuramente */}}>
        <Text style={styles.marketButtonText}>Mercado</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 30,
  },
  clientButton: {
    backgroundColor: '#6055FF',
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginBottom: 15,
    width: '100%',
  },
  clientButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  marketButton: {
    backgroundColor: '#0DAF12',
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 10,
    width: '100%',
  },
  marketButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});
