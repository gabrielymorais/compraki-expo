import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './styles/profileStyles';

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

      <TouchableOpacity style={styles.marketButton} onPress={() => {/* router.push('/login-mercado') */}}>
        <Text style={styles.marketButtonText}>Mercado</Text>
      </TouchableOpacity>
    </View>
  );
}
