import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './styles/introStyles';

export default function IntroScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>
        Peça seu Delivery{'\n'}no <Text style={styles.highlight}>ComprAki</Text>
      </Text>

      <Text style={styles.subtitle}>
        Escolha o mercado e selecione os produtos que deseja
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/select-profile')}>
        <Text style={styles.buttonText}>Vamos Começar</Text>
      </TouchableOpacity>
    </View>
  );
}
