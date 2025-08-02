import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './styles/signupStyles'; 

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
