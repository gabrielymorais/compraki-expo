import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function SignupScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Faça o cadastro gratuito</Text>

      <Text style={styles.label}>Nome Completo</Text>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Digite seu nome" style={styles.input} />
      </View>

      <Text style={styles.label}>Email</Text>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Digite seu email" style={styles.input} />
      </View>

      <Text style={styles.label}>Senha</Text>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Digite sua senha" secureTextEntry style={styles.input} />
      </View>

      <Text style={styles.label}>Confirme Sua Senha</Text>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Confirme a senha" secureTextEntry style={styles.input} />
      </View>

        <TouchableOpacity style={styles.button} onPress={() => router.replace('/(tabs)')}>
        <Text style={styles.buttonText}>Criar Conta</Text>
        </TouchableOpacity>

      <Text style={styles.bottomText}>
        Já possui uma conta?{' '}
        <Text style={styles.link} onPress={() => router.replace('/login')}>
          Entrar
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    justifyContent: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 30,
  },
  label: {
    marginBottom: 6,
    marginTop: 10,
    color: '#FF9900',
    fontWeight: '600',
  },
  inputContainer: {
    backgroundColor: '#F4F4F4',
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 15,
  },
  input: {
    height: 45,
  },
  button: {
    backgroundColor: '#FF9900',
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  bottomText: {
    textAlign: 'center',
    color: '#444',
  },
  link: {
    color: '#FF9900',
    fontWeight: '600',
  },
});
