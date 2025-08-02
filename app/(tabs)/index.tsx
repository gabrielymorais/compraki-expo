import { View, Text, StyleSheet, Image, FlatList, ScrollView, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Stack } from 'expo-router';

const mercados = [
  { id: '1', nome: 'Walmart', imagem: require('../../assets/images/walmart.jpg') },
  { id: '2', nome: 'Mercantil', imagem: require('../../assets/images/mercado-1.jpg') },
  { id: '3', nome: 'Mercado Azul', imagem: require('../../assets/images/mercado-2.jpg') },
  { id: '4', nome: 'Walmart', imagem: require('../../assets/images/walmart.jpg') },
  { id: '5', nome: 'Mercantil', imagem: require('../../assets/images/mercado-1.jpg') },
  { id: '6', nome: 'Mercado Azul', imagem: require('../../assets/images/mercado-2.jpg') },
];

export default function HomeScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false, 
        }}
      />

      <ScrollView style={styles.container}>
        {/* Topo */}
        <View style={styles.header}>
          <View style={styles.profileContainer}>
            <Image
              source={{ uri: 'https://i.pravatar.cc/100' }}
              style={styles.avatar}
            />
            <Text style={styles.username}>Gaby e Mandy</Text>
          </View>
          <FontAwesome name="bell-o" size={24} color="#FF9900" />
        </View>

        {/* Saudações */}
        <Text style={styles.greeting}>Hoje é um ótimo dia pra pedir algo fresquinho 🥦🍞</Text>

        {/* Barra de busca */}
        <TextInput
          placeholder="Buscar mercados..."
          style={styles.searchInput}
          placeholderTextColor="#888"
        />

        {/* Banner promocional */}
        <Image
          source={require('../../assets/images/banner.jpg')}
          style={styles.banner}
        />

        {/* Seção 1 */}
        <Text style={styles.sectionTitle}>Mercados disponíveis para você</Text>
        <FlatList
          data={mercados}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.cardList}
          renderItem={({ item }) => (
            <Image source={item.imagem} style={styles.card} />
          )}
        />

        {/* Seção 2 */}
        <Text style={styles.sectionTitle}>Mercados que você comprou recentemente</Text>
        <FlatList
          data={mercados}
          keyExtractor={(item) => 'r' + item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.cardList}
          renderItem={({ item }) => (
            <Image source={item.imagem} style={styles.card} />
          )}
        />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF9900',
  },
  greeting: {
    fontSize: 14,
    color: '#444',
    marginBottom: 10,
  },
  searchInput: {
    backgroundColor: '#F4F4F4',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  banner: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#FF9900',
  },
  cardList: {
    paddingVertical: 10,
  },
  card: {
    width: 120,
    height: 100,
    borderRadius: 8,
    marginRight: 10,
  },
});
