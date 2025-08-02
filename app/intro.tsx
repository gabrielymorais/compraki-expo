import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 40,
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: 10,
  },
  highlight: {
    color: '#FF9900',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#555',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#FF9900',
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
