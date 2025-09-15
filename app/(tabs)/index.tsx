import { View, Text, Image, FlatList, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import { useState, useEffect } from 'react';
import styles from './../styles/homeStyles';

const mercadosBase = [
  { id: '1', nome: 'Walmart', imagem: require('../../assets/images/walmart.jpg') },
  { id: '2', nome: 'Mercantil', imagem: require('../../assets/images/mercado-1.jpg') },
  { id: '3', nome: 'Teste Filtro', imagem: require('../../assets/images/mercado-2.jpg') },
];

export default function HomeScreen() {
  const [busca, setBusca] = useState('');
  const [mercadosFiltrados, setMercadosFiltrados] = useState(mercadosBase);
  const [favoritos, setFavoritos] = useState<string[]>([]);
  const [contador, setContador] = useState(0);
  const [saudacao, setSaudacao] = useState('');

  useEffect(() => {
    const hora = new Date().getHours();
    if (hora >= 5 && hora < 12) setSaudacao('Bom dia ☀️');
    else if (hora >= 12 && hora < 18) setSaudacao('Boa tarde 🌤️');
    else setSaudacao('Boa noite 🌙');
  }, []);

  useEffect(() => {
    if (busca.trim() === '') {
      setMercadosFiltrados(mercadosBase);
    } else {
      const filtrado = mercadosBase.filter((m) =>
        m.nome.toLowerCase().includes(busca.toLowerCase())
      );
      setMercadosFiltrados(filtrado);
    }
  }, [busca]);

  const alternarFavorito = (id: string) => {
    setFavoritos((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

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

        <Text style={styles.greeting}>
          {saudacao}, é um ótimo momento pra pedir algo fresquinho.
        </Text>

        <TextInput
          placeholder="Buscar mercados..."
          value={busca}
          onChangeText={setBusca}
          style={styles.searchInput}
          placeholderTextColor="#888"
        />

        <TouchableOpacity onPress={() => setContador(contador + 1)}>
          <Image
            source={require('../../assets/images/banner.jpg')}
            style={styles.banner}
          />
          <Text style={{ textAlign: 'center', marginTop: 8, color: '#555' }}>
            Banner clicado {contador} vezes
          </Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Mercados disponíveis para você</Text>

        {mercadosFiltrados.length === 0 ? (
          <Text style={styles.emptyText}>
            Nenhum mercado disponível no momento. Tente novamente mais tarde.
          </Text>
        ) : (
          <FlatList
            data={mercadosFiltrados}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.cardList}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => alternarFavorito(item.id)}>
                <Image source={item.imagem} style={styles.card} />
                <FontAwesome
                  name={favoritos.includes(item.id) ? 'heart' : 'heart-o'}
                  size={18}
                  color="#FF9900"
                  style={{ textAlign: 'center', marginTop: 4 }}
                />
              </TouchableOpacity>
            )}
          />
        )}
      </ScrollView>
    </>
  );
}
