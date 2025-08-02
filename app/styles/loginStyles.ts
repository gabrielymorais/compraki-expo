// styles/loginStyles.js
import { StyleSheet } from 'react-native';

const loginStyles = StyleSheet.create({
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

export default loginStyles;
