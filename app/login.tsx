import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import styles from "./styles/loginStyles";

export default function LoginScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>
        Seja Bem Vindo{"\n"}
        <Text style={styles.highlight}>ao ComprAki</Text>
      </Text>
      <Text style={styles.subtitle}>
        Olá Cliente, efetue o login{"\n"}para continuar
      </Text>

      <Text style={styles.label}>Email</Text>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Digite seu email" style={styles.input} />
      </View>

      <Text style={styles.label}>Senha</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Digite sua senha"
          secureTextEntry
          style={styles.input}
        />
      </View>

      <TouchableOpacity style={styles.forgotButton}>
        <Text style={styles.forgotText}>Esqueceu sua senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.replace("/(tabs)")}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <Text style={styles.bottomText}>
        Não possui uma conta?{" "}
        <Text style={styles.link} onPress={() => router.push("/signup")}>
          Crie aqui
        </Text>
      </Text>
    </View>
  );
}
