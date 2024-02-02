import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const data = {
    title: "Atención Para Tus Mascotas",
    subtitle: "Brigada Veterinaria",
    eventDate: "18 Sábado Noviembre",
    eventTime: "10H00 - 16H00",
    location: "Parque Somos, diagonal al Estadio Chucho Benítez",
    details: {
      date: "Martes 30 de diciembre del 2023",
      startTime: "14:00 horas",
      endTime: "18:00 horas",
      address: "Parque de Urdesa"
    },
    imageUri: require('../../../img/evento.png')
  };
  
  export const Evento = (navigation) => {
    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigation.navigate('Principal')}>
            <FontAwesomeIcon icon={faArrowLeft} size={24} />
        </TouchableOpacity>
        <View style={styles.header}>
          <Text style={styles.headerText}>{data.title}</Text>
          <Text style={styles.subHeaderText}>{data.subtitle}</Text>
        </View>
        <Image
          source={data.imageUri}
          style={styles.dogImage}
        />
        <View style={styles.details}>
          <Text style={styles.detailTextTitle}>Fecha:</Text>
          <Text style={styles.detailText}>{data.details.date}</Text>
          <Text style={styles.detailTextTitle}>Hora inicio:</Text>
          <Text style={styles.detailText}>{data.details.startTime}</Text>
          <Text style={styles.detailTextTitle}>Hora fin:</Text>
          <Text style={styles.detailText}>{data.details.endTime}</Text>
          <Text style={styles.detailTextTitle}>Dirección:</Text>
          <Text style={styles.detailText}>{data.details.address}</Text>
        </View>
      </ScrollView>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  header: {
    //backgroundColor: 'blue', // Replace with your desired color
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    //color: 'white',
    color: '#335143',
  },
  subHeaderText: {
    fontSize: 18,
    color: '#6BBECE',
    padding: 20,
    fontWeight: 'bold',
  },
  dogImage: {
    width: '100%',
    height: 200, // Adjust the size as needed
    resizeMode: 'contain',
  },
  infoBox: {
    backgroundColor: 'lightblue', // Replace with your desired color
    padding: 20,
  },
  infoText: {
    fontSize: 16,
    color: 'white',
  },
  details: {
    padding: 20,
  },
  detailText: {
    fontSize: 15,
    marginBottom: 5,
    color: '#335143',
  },
  detailTextTitle:{
    fontSize: 15,
    fontWeight: 'bold',
    color: '#335143',
  },
});