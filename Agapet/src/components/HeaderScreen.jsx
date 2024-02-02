import React from 'react';

import { View, Text, StyleSheet, Image, StatusBar, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import { BottomNotification } from './BottomNotification';

const popupList = [
  {
    id: 1,
    title: 'Atención para tu mascota',
    date: 'Sábado 02 Abril',
    location: 'Parque de Samanes, Diagonal al estadio Chucho Benítez',
  },
  {
    id: 2,
    title: 'Brigadas Veterinarias',
    date: 'Sábado 06 Enero y Domingo 7 Enero',
    location: 'Petpro, Plaza Quil Urb. Cataluña'
  },
  {
    id: 3,
    title: 'Aplicación Fipronil',
    date: 'Sabado 12 de Febrero',
    location: 'Pidelo en nuestras brigadas',
  },
];

const userInfo = {
    name: 'Juan',
    username: 'jxpita'
};

export const HeaderScreen = () => {
    let popupRef = React.createRef();

    const onShowPopup = () => {
        popupRef.show();
    };

    const onClosePopup = () => {
        popupRef.close();
    };

    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Bienvenido {userInfo.name}</Text>
                <StatusBar barStyle="dark-content"></StatusBar>
                <SafeAreaView style={styles.headerContainer}>
                  <TouchableWithoutFeedback onPress={onShowPopup} >
                    <Image
                      style={styles.imgIcon}
                      source={require("../../assets/notificacion.png")}
                    />
                  </TouchableWithoutFeedback>
                </SafeAreaView>
                <BottomNotification
                  estado="No iniciado"
                  ref={(target) => (popupRef = target)}
                  onTouchOutside={onClosePopup}
                  data={popupList}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: '#5FAFB9', // Example header color
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 40,
        borderBottomEndRadius : 20,
        borderBottomStartRadius: 20
      },
    imgIcon: {
    width: 40,
    height: 40
    },
    headerText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white'
    },
});
