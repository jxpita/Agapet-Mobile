import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Button, Dimensions, TouchableWithoutFeedback, Alert } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { HeaderScreen } from '../../components/HeaderScreen';

const adoptions = [
  {
    name: 'Chester',
    age: '5',
    race: 'Habanés',
    imageUrl: require('../../../img/perro1.jpg'),
  },
  {
    name: 'Firulais',
    age: '1',
    race: 'Bulldog',
    imageUrl: require('../../../img/perro2.jpg'),
  },
  {
    name: 'Bobby',
    age: '2',
    race: 'Husky',
    imageUrl: require('../../../img/perro3.jpg'),
  },
  // Mas Eventos
];

export const SLIDER_WIDTH = Dimensions.get('window').width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const renderCarousel = ({item, index}, navigation)=> {
  //console.log(require('../../../img/evento.png'))
  return (
    <TouchableWithoutFeedback /*onPress={() => navigation.navigate('Evento', { /* parámetros si es necesario })}*/>
      <View style={styles.adoptionCard}>
        <Image
          source={item.imageUrl}
          style={styles.adoptionImage}
        />
        <View style={styles.adoptionDetails}>
          <Text style={styles.adoptionName}>{item.name}</Text>
          <Text style={styles.adoptionAge}>{item.age} años</Text>
          <Text style={styles.adoptionRace}>{item.race}</Text>
        </View>
        <View style={styles.interestedButton}>
          <Button
            onPress={() => handleInterestedPress(item.name)}
            title="Más Información"
            color="#6BBECE"
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const handleInterestedPress = (adoptionName) => {
  /* Alert.alert(
    'Notificaciones de Evento', // Alert Title
    `¿Desea recibir notificaciones del evento ${adoptionName}?`, // Alert Message
    [
      {
        text: 'Cancelar',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Aceptar',
        //onPress: () => showConfirmationAlert(adoptionName), // Here you can add the logic to handle the subscription to notifications
      },
    ],
    { cancelable: true },
  ); */
};





export const Adopciones = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <HeaderScreen/>
      <View style={styles.content}>
        <View style={styles.adoptionContainer}>
            <Text style={styles.adoptionPets}>Adopciones</Text>
            <Text style={styles.description}>Estas son las mascostas que estan listas para ser adoptadas.</Text>
        </View>
        <View style={styles.carouselCard}>
          <Carousel
            data={adoptions}
            renderItem={(item) => renderCarousel(item, navigation)}
            sliderWidth={SLIDER_WIDTH} // Replace with the width of your slider
            itemWidth={ITEM_WIDTH} // Replace with the width of your items
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    paddingTop: 10,
  },
  header: {
    backgroundColor: '#F0F0F0', // Example header color
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  adoptionContainer: {
    paddingHorizontal: 50,
    paddingVertical: 10,
  },
  adoptionPets: {
    fontSize: 25,
    //marginVertical: 10,
    //marginLeft: 15,
    //paddingTop: 10,
    fontWeight: 'bold',
    paddingBottom: 20,
    textAlign: 'center',
    color: '#335143',
    fontWeight: 'bold'
  },

  description: {
    textAlign: 'center',
    color: '#335143',
  },
  carouselCard:{
    //margin: 5,
    alignItems: 'center',
  },
  adoptionCard: {
    //margin: 5,
    padding: 20,  
    borderRadius: 10,
    overflow: 'hidden',
    //backgroundColor: '#FFFFE0', // Example card background color
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'gray',
  },
  adoptionImage: {
    width: '100%',
    height: 300, // Adjust the height as needed
    resizeMode: 'cover',
    borderRadius: 20
  },
  adoptionDetails: {
    //padding: 15,
    textAlign: 'center',
    alignItems: 'center',
  },
  adoptionName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#335143',
  },
  eventInfo: {
    fontSize: 14,
    marginBottom: 5,
  },
  eventDateTime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  adoptionAge: {
    fontSize: 14,
    color: '#335143',
  },
  eventTime: {
    fontSize: 14,
  },
  adoptionRace: {
    fontSize: 14,
    marginBottom: 5,
    color : '#6BBECE',
  },
  interestedButton: {
    margin: 15,
    paddingHorizontal: 40,
  },
});