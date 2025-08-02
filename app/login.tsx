import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo.png")} // mesma logo da intro
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    justifyContent: "center",
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 4,
  },
  highlight: {
    color: "#FF9900",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
    marginBottom: 30,
  },
  label: {
    marginBottom: 6,
    marginTop: 10,
    color: "#FF9900",
    fontWeight: "600",
  },
  inputContainer: {
    backgroundColor: "#F4F4F4",
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 15,
  },
  input: {
    height: 45,
  },
  forgotButton: {
    alignSelf: "flex-end",
    marginBottom: 20,
  },
  forgotText: {
    fontSize: 13,
    color: "#FF9900",
  },
  button: {
    backgroundColor: "#FF9900",
    paddingVertical: 14,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  bottomText: {
    textAlign: "center",
    color: "#444",
  },
  link: {
    color: "#FF9900",
    fontWeight: "600",
  },
});
