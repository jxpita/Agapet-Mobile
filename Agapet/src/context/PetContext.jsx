import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { API_URL } from "@env";

export const PetContext = () => {
  const { userInfo } = useContext(AuthContext);
  const [isLoading, setisLoading] = useState(true);
  const [pet, setPet] = useState({});
  const [clinic, setClinic] = useState([]);

  const getMascota = async() => {

    try {
        
        const resp = await axios.get(`${API_URL}/mascota/usuario/${userInfo.idAdoptante}/`);
        setisLoading(false);
        setPet(resp?.data[0]);
        setClinic(resp?.data[0].vacunas);
      } catch (error) {
        console.log(error);
      }


    /*
    try {
      //const url = "${API_URL}/user/data";
      const resp = await axios.get(
        `${API_URL}/mascota/usuario/${userInfo.idAdoptante}/`
      );
    
      console.log(resp.data);
      //setPet(resp.data);
    } catch (error) {
      console.log(error);
    }
*/
    /* 
    axios.get(url,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+userInfo.access
            },   
    }).then(res => {




        // *********************
        axios.get(`${API_URL}/mascota/usuario/${res.data?.iduser}/`,
        {
            headers: {
                'Content-Type': 'application/json',
            },   
        }).then(res => {
            setisLoading(false);
            let data = res.data
            setPet(data)
        }).catch(e => {
            console.log(`data error ${e}`);
            });
        // *********************
    }).catch(e => {
        console.log(`data error ${e}`);
    });
*/
  };

  const getVacunas = () => {
    const url = `${API_URL}/user/data`;
    axios
      .get(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + userInfo.access,
        },
      })
      .then((res) => {
        // *********************
        axios
          .get(
            `${API_URL}/vacuna/mascota?iduser=${res.data.iduser}`,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then((res) => {
            setisLoading(false);
            let data = res.data;
            setClinic(data);
          })
          .catch((e) => {
            console.log(`data error ${e}`);
          });
        // *********************
      })
      .catch((e) => {
        console.log(`data error ${e}`);
      });
  };

  useEffect(() => {
    getMascota();
   // getVacunas();
  }, []);

  return {
    pet,
    clinic,
    isLoading,
  };
};
