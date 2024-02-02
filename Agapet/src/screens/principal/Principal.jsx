import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Button, Dimensions, TouchableWithoutFeedback, Alert } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { HeaderScreen } from '../../components/HeaderScreen';

const events = [
  {
    title: 'Atención para tu mascota',
    date: 'Sábado 30 Diciembre',
    location: 'Parque de Samanes, Diagonal al estadio Chucho Benítez',
    imageUrl: require('../../../img/evento.png'),
  },
  {
    title: 'Brigadas Veterinarias',
    date: 'Sábado 06 Enero y Domingo 7 Enero',
    location: 'Petpro, Plaza Quil Urb. Cataluña',
    imageUrl: require('../../../img/evento2.png'),
  },
  {
    title: 'Aplicación Fipronil',
    date: 'Sabados 12 de Febrero',
    location: 'Pidelo en nuestras brigadas',
    imageUrl: require('../../../img/evento3.png'),
  },
  // Mas Eventos
];

export const SLIDER_WIDTH = Dimensions.get('window').width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const renderCarousel = ({item, index}, navigation)=> {
  //console.log(require('../../../img/evento.png'))
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('Evento', { /* parámetros si es necesario */ })}>
      <View style={styles.eventCard}>
        <Image
          source={item.imageUrl}
          style={styles.eventImage}
        />
        <View style={styles.eventDetails}>
          <Text style={styles.eventTitle}>{item.title}</Text>
          <Text style={styles.eventDate}>{item.date}</Text>
          <Text style={styles.eventLocation}>{item.location}</Text>
        </View>
        <View style={styles.interestedButton}>
          <Button
            onPress={() => handleInterestedPress(item.title)}
            title="Me Interesa"
            color="#6BBECE"
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const handleInterestedPress = (eventTitle) => {
  Alert.alert(
    'Notificaciones de Evento', // Alert Title
    `¿Desea recibir notificaciones del evento ${eventTitle}?`, // Alert Message
    [
      {
        text: 'Cancelar',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Aceptar',
        onPress: () => showConfirmationAlert(eventTitle), // Here you can add the logic to handle the subscription to notifications
      },
    ],
    { cancelable: true },
  );
};


const showConfirmationAlert = (eventTitle) => {
  Alert.alert(
    '¡Notificaciones Activadas!', // Confirmation Alert Title
    `Cuando el evento esté cerca recibirá notificaciones`, // Confirmation Alert Message
    [
      { text: 'OK', onPress: () => console.log('Notification set for event:', eventTitle) }
    ]
  );
};


export const Principal = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <HeaderScreen/>
      <View style={styles.content}>
        <Text style={styles.upcomingEvents}>Próximos Eventos</Text>
        <View style={styles.carouselCard}>
          <Carousel
            data={events}
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
    paddingTop: 20,
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
  upcomingEvents: {
    fontSize: 25,
    //marginVertical: 10,
    //marginLeft: 15,
    paddingTop: 10,
    paddingBottom: 20,
    textAlign: 'center',
    color: '#335143',
    fontWeight: 'bold'
  },
  carouselCard:{
    //margin: 5,
    alignItems: 'center',
  },
  eventCard: {
    //margin: 5,
    padding: 20,  
    borderRadius: 10,
    overflow: 'hidden',
    //backgroundColor: '#FFFFE0', // Example card background color
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'gray',
  },
  eventImage: {
    width: '100%',
    height: 300, // Adjust the height as needed
    resizeMode: 'cover',
    borderRadius: 20
  },
  eventDetails: {
    padding: 10,
    textAlign: 'center',
    alignItems: 'center',
  },
  eventTitle: {
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
  eventDate: {
    fontSize: 14,
    color: '#335143',
  },
  eventTime: {
    fontSize: 14,
  },
  eventLocation: {
    fontSize: 14,
    marginBottom: 5,
    color: '#335143',
  },
  interestedButton: {
    margin: 15,
    paddingHorizontal: 40,
  },
});