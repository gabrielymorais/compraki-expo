import { View, Text, Image, FlatList, ScrollView, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import styles from './../styles/homeStyles'; 

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

        <Text style={styles.greeting}>Hoje é um ótimo dia pra pedir algo fresquinho 🥦🍞</Text>

        <TextInput
          placeholder="Buscar mercados..."
          style={styles.searchInput}
          placeholderTextColor="#888"
        />

        <Image
          source={require('../../assets/images/banner.jpg')}
          style={styles.banner}
        />

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
