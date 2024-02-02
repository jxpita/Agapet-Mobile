import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { API_URL } from "@env";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  /*
    const register = (name,lastname,email, phone, direction, password) =>{
        const url ='${API_URL}/user/registeradoptante';
        setIsLoading(true)
        axios.post(url,{
            name,
            lastname,
            email,
            phone,
            direction,
            password,
            headers: {  'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'}
          }).then(res => {
            let userInfo = res.data;
            setUserInfo(userInfo);
            alert("Usuario Registrado con éxito");
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            setIsLoading(false);
          }).catch(e => {
            console.log(`register error ${e}`);
            setIsLoading(false);
          });
    };
*/

  const register = async (name,lastname,email, phone, direction, password) => {
    try {
      const url = `${API_URL}/user/registeradoptante`;
      const prueba = `${API_URL}/user/registeradoptante`;
      //console.log(url);
      setIsLoading(true);
      await axios.post(url, {user:{name,lastname,email, phone, direction, password,age:0}});
      alert("Usuario Registrado con éxito");
      setIsLoading(false);
      
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const login = (username, password) => {
    console.log("API",`${API_URL}/token/`);
    const url = `http://192.168.100.60:8000/token/`;
    //const url = `${API_URL}/token/`;
    setIsLoading(true);
    axios
      .post(url, { username, password })
      .then((res) => {
        //console.log(res.data)
        let userInfo = res.data;
        //console.log("data info", userInfo);
        //console.log("Mi token de acceso: ", userInfo.access);
        setUserInfo(userInfo);
        AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
        //console.log("userInfo", JSON.stringify(userInfo));
        setIsLoading(false);
      })
      .catch((error) => {
        if (error.response) {
          // El servidor respondió con un código de estado diferente de 2xx
          console.log('Error de respuesta:', error.response.data);
          console.log('Código de estado HTTP:', error.response.status);
        } else if (error.request) {
          // La solicitud fue realizada pero no se recibió respuesta
          console.log('Error de solicitud:', error.request);
        } else {
          // Algo sucedió en la configuración de la solicitud que generó un error
          console.log('Error general:', error.message);
        }
        console.log('Error de configuración:', error.config);
        setIsLoading(false);
      });
  };

  const logout = () => {
    setIsLoading(true);
    AsyncStorage.removeItem("userInfo");
    setUserInfo({});
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      //setSplashLoading(true);
      let userInfo = await AsyncStorage.getItem("userInfo");
      userInfo = JSON.parse(userInfo);
      if (userInfo) {
        setUserInfo(userInfo);
      }
      //setSplashLoading(false);
    } catch (e) {
      //setSplashLoading(false);
      console.log(`is logged in error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userInfo,
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
