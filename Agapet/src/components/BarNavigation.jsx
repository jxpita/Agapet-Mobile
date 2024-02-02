import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Ionicons,
  FontAwesome5,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
//Inicio
import { Timeline } from "../screens/timeline/Timeline";
// Usuario
import { ProfileUser } from "../screens/profile/ProfileUser";
// Mascota
import { Pet } from "../screens/petProfile/Pet";
import { Principal } from "../screens/principal/Principal";
import { Clinic } from "../screens/petProfile/Clinic";
import { Vaccine } from "../screens/petProfile/Vaccine";
import { Sterilization } from "../screens/petProfile/Sterilization";
import { Wormed } from "../screens/petProfile/Wormed";
import { UpdateVaccine } from "../screens/petProfile/UpdateVaccine";
import { Evento } from '../screens/evento/Evento'; 
import { Adopciones } from '../screens/adopciones/Adopciones';
import { PetScreen } from "../screens/pet/pet";
//faq
import { Faq } from "../screens/faq/faq";
//recompensa
import { Recompensa } from "../screens/recompensa/Recompensa";
import { Canjeo } from "../screens/recompensa/Canjeo";
//cursos
import { Cursos } from "../screens/cursos/Cursos";
import { InfoCurso } from "../screens/cursos/InfoCurso";

import { useNavigationVisibility } from './NavigationContext';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function StackRecompensa() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Recompensa"
        component={Recompensa}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Canjeo"
        component={Canjeo}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Pet"
        component={Pet}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Clinic"
        component={Clinic}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Vaccine"
        component={Vaccine}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Sterilization"
        component={Sterilization}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Wormed"
        component={Wormed}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="UpdateVaccine"
        component={UpdateVaccine}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

function StackTimeline() {
  return (
    <Stack.Navigator initialRouteName="Timeline">
      <Stack.Screen
        name="Timeline"
        component={Timeline}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Pet"
        component={Pet}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Clinic"
        component={Clinic}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Vaccine"
        component={Vaccine}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Sterilization"
        component={Sterilization}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Wormed"
        component={Wormed}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="UpdateVaccine"
        component={UpdateVaccine}
        options={{
          headerShown: false,
        }}
      />   
    </Stack.Navigator>
  );
}

function StackPet() {
  return (
    <Stack.Navigator initialRouteName="Pet">
      <Stack.Screen
        name="Pet"
        component={Pet}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Clinic"
        component={Clinic}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Vaccine"
        component={Vaccine}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Sterilization"
        component={Sterilization}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Wormed"
        component={Wormed}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="UpdateVaccine"
        component={UpdateVaccine}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Timeline"
        component={Timeline}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

function StackEvento() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Evento"
        component={Evento}
        options={{
          headerShown: false, // Cambia esto según tus preferencias
        }}
      />
    </Stack.Navigator>
  );
}

function StackAdopciones() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Adopciones"
        component={Adopciones}
        options={{
          headerShown: false, // Cambia esto según tus preferencias
        }}
      />
    </Stack.Navigator>
  );
}

function StackCursos() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Cursos"
        component={Cursos}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="InfoCurso"
        component={InfoCurso}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Pet"
        component={Pet}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Clinic"
        component={Clinic}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Vaccine"
        component={Vaccine}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Sterilization"
        component={Sterilization}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Wormed"
        component={Wormed}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="UpdateVaccine"
        component={UpdateVaccine}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

function MyTabs() {
  const { isTabBarVisible } = useNavigationVisibility();
  return (
    <Tab.Navigator
      initialRouteName="Principal" //Cambiar aqui una pantalla para ver mascota o timeline
      screenOptions={{
        tabBarActiveTintColor: "#335143",
        tabBarInactiveTintColor: "white",
        tabBarShowLabel: true,
        tabBarStyle: {
          display: isTabBarVisible ? 'flex' : 'none',
          position: "absolute",
          backgroundColor: "#DF9F51",
          bottom: 8,
          left: 20,
          right: 20,
          elevation: 0,
          borderRadius: 25,
          height: 55,
          paddingHorizontal: '5%',
          paddingTop: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12, // Ajusta este valor para cambiar el tamaño del texto
          paddingBottom: 5,
        },
      }}
    >
      <Tab.Screen
        name="PetScreen"
        component={PetScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="dog" size={size} color={color} />
          ),
          tabBarLabel: 'Mis mascotas',
        }}
      />

      <Tab.Screen
        name="Adopciones"
        component={StackAdopciones}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            // Elige un icono apropiado para la pestaña de Evento
            <FontAwesome name="paw" size={size} color={color} />
          ),
          tabBarLabel: 'Adopciones',
        }}
      />   

      <Tab.Screen
        name="Principal"
        component={Principal}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
          tabBarLabel: 'Inicio',
        }}
      />

      <Tab.Screen
        name="ProfileUser"
        component={ProfileUser}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user-circle" size={size} color={color} />
          ),
          tabBarLabel: 'Mi Perfil',
        }}
      />

      <Tab.Screen
        name="Evento"
        component={StackEvento}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            // Elige un icono apropiado para la pestaña de Evento
            <MaterialCommunityIcons name="calendar" size={size} color={color} />
          ),
          tabBarButton: () => null, 
          //tabBarStyle: { display: 'none' }, Ocutar el navbar de la ventana
        }}
      />

      {/* <Tab.Screen
        name="faq"
        component={Faq}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="question-circle-o" size={size} color={color} />
          ),
        }}
      /> */}
     {/*  <Tab.Screen
        name="StackTimeline"
        component={StackTimeline}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="analytics-outline" size={size} color={color} />
          ),
        }}
      /> */}

      {/* 
      <Tab.Screen
        name="StackRecompensa"
        component={StackRecompensa}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="medal-outline"
              size={size}
              color={color}
            />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
}

export const BarNavigation = () => {
  return <MyTabs />;
};
