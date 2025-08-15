# 🛒 Compraki

Aplicativo mobile feito com **Expo (React Native)** para facilitar o delivery em mercados locais.  
Com ele, usuários podem se cadastrar, visualizar mercados próximos, e simular suas compras de forma rápida e intuitiva.

> 💡 Projeto fictício criado para fins de aprendizado e portfólio.

---

## 📱 Funcionalidades

- Tela de boas-vindas e onboarding
- Escolha de perfil: cliente ou mercado
- Cadastro e login de cliente
- Navegação por abas (Home e Perfil)
- Exibição de mercados disponíveis (mockados)
- Tela de perfil com opção de logout

---

## 🖼️ Telas implementadas

- `IntroScreen`: tela de introdução com botão “Vamos começar”
- `SelectProfileScreen`: escolha entre Cliente e Mercado
- `LoginScreen`: login de cliente
- `SignupScreen`: cadastro de cliente
- `HomeScreen`: listagem de mercados e recomendados
- `PerfilScreen`: informações do usuário e botão sair

---
## 👋 Funcionalidade de Saudação com Renderização Condicional

Implementamos uma funcionalidade que exibe uma **mensagem de saudação dinâmica** na tela inicial com base no horário atual do dispositivo.

### 🧠 Lógica

A saudação é exibida automaticamente conforme o período do dia, utilizando a hora local para determinar qual texto mostrar:

- **Bom dia ☀️** → Entre 05h e 11h59  
- **Boa tarde 🌤️** → Entre 12h e 17h59  
- **Boa noite 🌙** → Entre 18h e 04h59

## ⚠️ Renderização Condicional para Lista Vazia

Adicionamos uma funcionalidade que melhora a experiência do usuário ao exibir uma mensagem informativa sempre que a lista de mercados estiver vazia, tanto para os mercados disponíveis quanto para os mercados recentemente acessados.

### 🔍 Comportamento

Se **nenhum mercado estiver disponível**, é exibido o seguinte texto no lugar da lista correspondente:

- **Para a seção "Mercados disponíveis para você"**:  
  `Nenhum mercado disponível no momento. Tente novamente mais tarde.`

- **Para a seção "Mercados que você comprou recentemente"**:  
  `Você ainda não comprou em nenhum mercado. Vamos começar? 🛒`

## 🚀 Tecnologias utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Expo Router](https://expo.github.io/router/)
- [React Navigation](https://reactnavigation.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [FontAwesome Icons](https://fontawesome.com/)

---

## ⚙️ Como rodar o projeto localmente

### 🔧 Pré-requisitos

- Node.js 20 ou superior
- Expo CLI instalado globalmente:
- Celular com o app Expo Go instalado (Play Store / App Store)
```bash
npm install -g expo-cli
```
## 📦 Instalação
- Clone o repositório e entre nele:

```bash
git clone https://github.com/gabrielymorais/compraki-expo.git
```
```bash
cd compraki-expo
```

## ▶️ Rodar o app
- Inicie o servidor:
```bash
npx expo start
```
- Abra o app Expo Go no celular e escaneie o QR Code gerado no terminal ou navegador.

## 🧪 Testar a aplicação
- O app funciona completamente via Expo Go
- Não possui backend (mercados exibidos são mockados)
- Navegação e formulários estão ativos

## 👩‍💻 Desenvolvedoras
Amanda Morais e Gabriely Morais

