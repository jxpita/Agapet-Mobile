import React, { useState, useEffect, Fragment } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Image, StatusBar, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import { useNavigationVisibility } from '../../components/NavigationContext';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { HeaderScreen } from '../../components/HeaderScreen';


const petsData = [
  {
    name: 'Chester',
    age: '5',
    race: 'Boxer',
    imageUrl: require('../../../img/pet1.jpg'),
  },
  {
    name: 'Firulais',
    age: '4',
    race: 'French Puddle',
    imageUrl: require('../../../img/pet3.jpg'),
  },
  {
    name: 'Bobby',
    age: '3',
    race: 'Boxer',
    imageUrl: require('../../../img/pet2.jpg'),
  },
];

const PetItem = ({ name, race, age, imageUrl }) => (
  <View style={styles.itemContainer}>
    <Image source={imageUrl} style={styles.petImage} />
    <View style={styles.petInfo}>
      <Text style={styles.petName}>{name}</Text>
      <Text style={styles.petRace}>{race}</Text>
      <Text style={styles.petAge}>{age} años</Text>
    </View>
  </View>
);

export const PetScreen = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPets, setFilteredPets] = useState(petsData);
  const { setIsTabBarVisible } = useNavigationVisibility();

  const handleInputFocus = () => setIsTabBarVisible(false);
  const handleInputBlur = () => setIsTabBarVisible(true);

  useEffect(() => {
    if (searchQuery) {
      const filteredData = petsData.filter(pet =>
        pet.name.toLowerCase().includes(searchQuery.toLowerCase()) || // Filtrar por nombre
        pet.race.toLowerCase().includes(searchQuery.toLowerCase()) // Filtrar por tipo
        // Puedes agregar más condiciones de búsqueda si es necesario
      );
      setFilteredPets(filteredData);
    } else {
      setFilteredPets(petsData); // Si no hay texto de búsqueda, mostrar todas las mascotas
    }
  }, [searchQuery]); // Este efecto se ejecutará cada vez que searchQuery cambie

  
  return (  
    <Fragment>
      { petsData.length > 0 ? 
        <View style={styles.container}>
          <HeaderScreen/>
          <View style={styles.content}>
            <Text style={styles.title}>Mis Mascotas</Text>
            <Text style={styles.description}>Estas son tus mascotas registradas</Text>
            <TextInput
              placeholder="Buscar"
              style={styles.searchInput}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              value={searchQuery}
              onChangeText={text => setSearchQuery(text)}
            />
            <FlatList
              data={filteredPets} // Usar el estado filteredPets para el FlatList
              renderItem={({ item }) => <PetItem {...item} />}
              keyExtractor={item => item.key} // Asegúrate de que cada pet tenga una clave única
            />
          </View>
        </View>
        :
        <View >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "50%",
              padding: 20,
              gap: 5,
              borderWidth: 1,
              borderColor: "orange",
              marginRight:20,
              marginLeft:20,
              borderRadius: 12
            }}
          >
            <MaterialCommunityIcons name="dog" size={22} color="#335143" />
            <Text style={{
              textAlign:"center",
              color: "#335143"
            }}>
              Aún no tiene una mascota registrada
            </Text>
          </View>
        </View>
      }
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
    backgroundColor: 'white'
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,
    color: '#335143'
  },
  description :{
    textAlign: 'center',
    paddingVertical: 10,
    color: '#335143'
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 8,
    backgroundColor: 'white',
    borderRadius: 20, // Ajusta para un borde redondeado más pronunciado
    shadowColor: '#000', // Color de la sombra
    shadowOpacity: 0.5, // Transparencia de la sombra
    shadowRadius: 10, // Radio de la sombra
    elevation: 3.5, // Elevación para Android
    alignItems: 'center', // Alinea los ítems verticalmente
    overflow: 'hidden',
    marginHorizontal: 2
  },
  petImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  petInfo: {
    marginLeft: 10,
    justifyContent: 'center',    
  },
  petName: {
    fontWeight: 'bold',
    color: '#335143'
  },
  petRace: {
    color: '#335143'
  },
  petAge: {
    color: '#335143'
  },
});