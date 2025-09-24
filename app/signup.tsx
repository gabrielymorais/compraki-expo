import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../services/firebase/config";
import { setDoc, doc } from "firebase/firestore";
import styles from "./styles/signupStyles";

export default function SignupScreen() {
  const router = useRouter();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const handleSignup = async () => {
    // Verifica se todos os campos estão preenchidos
    if (!nome || !email || !senha || !confirmarSenha) {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }

    // Verifica se as senhas coincidem
    if (senha !== confirmarSenha) {
      Alert.alert("Erro", "As senhas não coincidem.");
      return;
    }

    try {
      // Cria o usuário no Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        senha
      );

      const user = userCredential.user;

      // Salva informações adicionais no Firestore
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        nome: nome,
        email: email,
        criadoEm: new Date(),
      });

      Alert.alert("Sucesso", "Conta criada com sucesso!");
      router.replace("/(tabs)");
    } catch (error: any) {
      console.log("Erro no cadastro:", error);

      if (error.code === "auth/email-already-in-use") {
        Alert.alert("Erro", "Este e-mail já está em uso.");
      } else if (error.code === "auth/weak-password") {
        Alert.alert("Erro", "A senha deve ter pelo menos 6 caracteres.");
      } else {
        Alert.alert("Erro", "Ocorreu um erro ao criar a conta.");
      }
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Faça o cadastro gratuito</Text>

      <Text style={styles.label}>Nome Completo</Text>
      <View style={styles.inputContainer}>
        <TextInput
          value={nome}
          onChangeText={setNome}
          placeholder="Digite seu nome"
          style={styles.input}
        />
      </View>

      <Text style={styles.label}>Email</Text>
      <View style={styles.inputContainer}>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Digite seu email"
          keyboardType="email-address"
          autoCapitalize="none"
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

      <Text style={styles.label}>Confirme Sua Senha</Text>
      <View style={styles.inputContainer}>
        <TextInput
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
          placeholder="Confirme a senha"
          secureTextEntry
          style={styles.input}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Criar Conta</Text>
      </TouchableOpacity>

      <Text style={styles.bottomText}>
        Já possui uma conta?{" "}
        <Text style={styles.link} onPress={() => router.replace("/login")}>
          Entrar
        </Text>
      </Text>
    </View>
  );
}
