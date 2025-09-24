import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../services/firebase/config";
import styles from "./styles/loginStyles";
import { doc, getDoc } from "firebase/firestore";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !senha) {
      Alert.alert("Atenção", "Preencha todos os campos.");
      return;
    }

    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;

      // (Opcional) Recuperar dados extras do Firestore
      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (userDoc.exists()) {
        console.log("Usuário logado:", userDoc.data());
      }

      router.replace("/(tabs)");
    } catch (error: any) {
      console.log("Erro no login:", error);
      let mensagemErro = "Verifique seu email e senha.";
      if (error.code === "auth/invalid-email") {
        mensagemErro = "Email inválido.";
      } else if (error.code === "auth/user-not-found") {
        mensagemErro = "Usuário não encontrado.";
      } else if (error.code === "auth/wrong-password") {
        mensagemErro = "Senha incorreta.";
      }
      Alert.alert("Erro ao entrar", mensagemErro);
    } finally {
      setLoading(false);
    }
  };

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
      <Text style={styles.subtitle}>Olá Cliente, efetue o login para continuar</Text>

      <Text style={styles.label}>Email</Text>
      <View style={styles.inputContainer}>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Digite seu email"
          autoCapitalize="none"
          keyboardType="email-address"
          style={styles.input}
        />
      </View>

      <Text style={styles.label}>Senha</Text>
      <View style={styles.inputContainer}>
        <TextInput
          value={senha}
          onChangeText={setSenha}
          placeholder="Digite sua senha"
          secureTextEntry
          style={styles.input}
        />
      </View>

      <TouchableOpacity style={styles.forgotButton}>
        <Text style={styles.forgotText}>Esqueceu sua senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, loading && { opacity: 0.7 }]}
        onPress={handleLogin}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Entrar</Text>
        )}
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
