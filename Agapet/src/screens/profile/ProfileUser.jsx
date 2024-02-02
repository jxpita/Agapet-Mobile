import axios from "axios";
import { useEffect, useState, useContext } from "react";
import {
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { AuthContext } from "../../context/AuthContext";
import Spinner from "react-native-loading-spinner-overlay";
import * as ImagePicker from "expo-image-picker";
import { API_URL } from "@env";
import { useNavigationVisibility } from '../../components/NavigationContext';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const ProfileUser = ({ navigation }) => {
  const { userInfo, logout } = useContext(AuthContext);
  const [isLoading, setisLoading] = useState(true);
  const [dataUser, setDataUser] = useState({});
  const token = userInfo.access;
  console.log("USER INFO TOKEN", {userInfo });
  const [adoptanteData, setadoptanteData] = useState({
    first_name: 'Juan',
    lastname: 'Pita',
    email: 'jxpita@gmail.com',
    phone: '0984511551',
    address: 'Urbanizacion las Riberas',
    age: 28,
    imageUrl: require('../../../img/profile.jpg')
  });
  let editable;

  // Imputs
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [direction, setDirection] = useState("");

  // Imagenes
  const [image, setImage] = useState("");
  const [imageUpdate, setimageUpdate] = useState("");

  const { setIsTabBarVisible } = useNavigationVisibility();

  const handleInputFocus = () => setIsTabBarVisible(false);
  const handleInputBlur = () => setIsTabBarVisible(true)

  const selectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setimageUpdate(result.assets[0].base64);
    }
  };

  const getUser = (token) => {
    const url = `${API_URL}/user/data`;
    axios
      .get(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        setisLoading(false);
        let data = res.data;
        console.log(data);
        setDataUser(data);
      })
      .catch((e) => {
        console.log(`data error ${e}`);
      });
  };

  const { user } = adoptanteData;

  const update = async (phone, direction, age, image) => {
    const url = `${API_URL}/user/updateadoptante/${userInfo.idAdoptante}`;

    /*
    let bodyFormData = new FormData();
    if (phone.length > 0) {
      bodyFormData.append("phone", phone);
    }
    if (direction.length > 0) {
      bodyFormData.append("direction", direction);
    }
    if (age.length > 0) {
      bodyFormData.append("age", age);
    }
    if (image.length > 0) {
      bodyFormData.append("imagen64", image);
    }*/

    try {
      /* 
      if ([phone, direction, age, image].includes("")) {
        return;
      }*/

      //adoptanteData.user?.phone

        //"data:image/png;base64," + imageUpdate,

      const adoptanteUpdate = {
        imagen64: imageUpdate == ""? adoptanteData.user.imagen64: "data:image/png;base64," + imageUpdate,
        user: {
          ...user,
          phone: phone.length > 0 ? phone : adoptanteData.user.phone,
          direction:direction.length >0 ? direction: adoptanteData.user.direction,
          age:age.length>0?age:adoptanteData.user.age,
        },
      };

      await axios.put(url, adoptanteUpdate);
      alert("Usuario actualizado correctamente");
      setPhone(phone);
      setDirection(direction);
      setAge(age);
    } catch (error) {
      console.log(error);
    }

    /*
    axios({
      method: "put",
      url: url,
      data: bodyFormData,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => {
        console.log(response);
        alert("Datos actualizados");
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });*/
  };

  const getAdoptante = async () => {
    /* console.log("CONSULTA ADOPTANTE"); */
    const resp = await axios.get(
      `${API_URL}/modulos/usuario/${userInfo.id}`
    );
    setadoptanteData(resp.data);
    /* console.log("data", resp.data); */
  };

  useEffect(() => {
    // Datos de mi usuario
    //getUser(token);
    getAdoptante();
    // Seleccionar imagenes
    async () => {
      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      sethasGalleryPermission(galleryStatus.status === "granted");
    };
    // Cierre de mi useEffect
  }, []);

  return (
    <ScrollView>
      <View style={style.fondo}>
        <View
          style={{
            position: "relative",
            alignSelf: "flex-end",
            paddingTop: "10%",
            paddingRight: "3%",
          }}
        >
        </View>
        <View style={style.imageContainer}>
          {
            // Inputs de edad
            adoptanteData.imageUrl && !image ? (
              <TouchableOpacity onPress={selectImage}>
                <Image
                  style={style.image}
                  source={adoptanteData.imageUrl}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={selectImage}>
                <Image style={style.image} source={{ uri: image }} />
              </TouchableOpacity>
            )
          }
          <View style={style.fondoPerfil}>
            <View
              style={{
                flexDirection: "row",
                marginLeft: 10,
                justifyContent: "center",
              }}
            >
              <Text style={style.sesion}>
                {adoptanteData.first_name} {adoptanteData.lastname}
              </Text>
            </View>
          </View>
        </View>
        <View style={style.botonLogout}>
          <Button
            color={"#DF9F51"}
            title="Cerrar sesión"
            onPress={logout}
            style={style.prueba}
          />
        </View>
        {/*<Spinner visible={isLoading} />*/}
        <View style={style.fondo2}>
          <View style={style.fondo3}>
            <View style={style.inputs}>
              <View style={style.inputContainer}>
                <Text style={style.label}>Correo</Text>
                <TextInput
                  style={editable? style.input : style.inputNotEditable}
                  //value={email}
                  placeholder={adoptanteData.email}
                  editable={false}
                  //onChangeText={text => setEmail(text)}
                />
              </View>
              
              <View style={style.inputContainer}>
              <Text style={style.label}>Telefono</Text>
                <TextInput
                  style={style.input}
                  //value={dataUser.phone}
                  placeholder={adoptanteData.phone}
                  onChangeText={(text) => setPhone(text)}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                />
              </View>

              <View style={style.inputContainer}>
                <Text style={style.label}>Dirección</Text>
                <TextInput
                  style={style.input}
                  value={direction}
                  placeholder={adoptanteData.address}
                  onChangeText={(text) => setDirection(text)}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                />
              </View>

              <View style={style.inputContainer}>
              <Text style={style.label}>Edad</Text>
                <TextInput
                  style={style.input}
                  value={age}
                  placeholder={
                    adoptanteData.age !== undefined
                      ? adoptanteData.age.toString()
                      : "Ingrese su edad"
                  }
                  onChangeText={(text) => setAge(text)}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                />
              </View>

              {/* {
                adoptanteData?.user.age!==null?
                ( <TextInput
                  style={style.input}
                  value={age}
                  placeholder={adoptanteData?.user.age.toString()}
                  onChangeText={(text) => setAge(text)}
                />):(<TextInput
                  style={style.input}
                  value={age}
                  placeholder="Ingrese su edad"
                  onChangeText={(text) => setAge(text)}
                />)
              } */}

              {
                // Inputs de edad
                /* 
                adoptanteData?.user.age ? (
                  <TextInput
                    style={style.input}
                    value={age}
                    placeholder={adoptanteData?.user.age.toString()}
                    onChangeText={(text) => setAge(text)}
                  />
                ) : (
                  <TextInput
                    style={style.input}
                    value={age}
                    placeholder="Ingrese su edad"
                    onChangeText={(text) => setAge(text)}
                  />
                )
              */
              }
              {/* Boton de guardar*/}
              <View style={style.botones}>
                <View style={style.boton}>
                  <Button
                    color={"#5FAFB9"}
                    title="Guardar"
                    onPress={() => {
                      update(phone, direction, age, image);
                      //imageupdate(image)
                    }}
                  />
                </View>
              </View>
              
            </View>
            </View>
          </View>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  sesion: {
    color: "#335143",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 25,
  },
  fondo: {
    backgroundColor: "#5FAFB9",
    justifyContent: "center",
    alignItems: "center",
  },
  fondo2: {
    backgroundColor: "#fff",
    width: width,
    paddingTop: '8%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    overflow: "hidden",
    justifyContent: "center",
  },
  fondo3: {
    //marginTop: "5%",
    //marginBottom: '1%'
  },
  fondoPerfil: {
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    //width: '50%',
    //height: '30%',
    width: 150,
    height: 150,
    borderRadius: 100,
    overflow: "hidden",
    //marginTop: '25%',
    //marginBottom: "10%",
    backgroundColor: "white",
  },
  image2: {
    //width: '50%',
    //height: '30%',
    width: 180,
    height: 180,
    borderRadius: 100,
    //marginTop: "2%",
    //marginBottom: "2%",
  },
  inputContainer: {
    paddingBottom: "5%",
  },
  label:{
    fontSize: width * 0.05,
    //paddingBottom: 5,
    fontWeight: "bold",
    color: "#335143",
  },
  input: {
    height: 35,

    borderBottomWidth: 1,
    fontSize: width * 0.05,
    color: "grey",
    borderColor: "grey",
  },
  inputNotEditable:{
    height: 35,
    borderBottomWidth: 1,
    fontSize: width * 0.05,
    opacity: 0.3,
    color: "grey",
    borderColor: "grey",

  },
  botones: {
    padding: 20
  },
  boton: {
    marginLeft: "10%",
    marginRight: "10%",
    //padding: 20,
    borderRadius: 10,
    paddingBottom: "5%",
    //marginTop: "5%",
  },
  botonLogout:{
    paddingTop: '1%',
    paddingBottom: '5%',
  },
  img: {
    width: "5%",
    height: "5%",
    overflow: "hidden",
  },
  contimg: {
    width: 50,
    height: 50,
  },
  contimg2: {
    width: 50,
    height: 50,
    top: 100,
    left: 100,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "10%",
    marginTop: "10%",
  },
  tinyLogo: {
    width: 50,
    height: 50,
    marginLeft: "5%",
    marginRight: "5%",
    marginBottom: "3%",
    marginTop: "3%",
  },
  inputs: {
    paddingHorizontal: "10%",
  },
});
