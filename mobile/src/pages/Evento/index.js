import React, { useState, useEffect }from 'react';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-community/async-storage';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles'
import MapView, {Marker} from 'react-native-maps';
import api from '../../../services/api';

export default function EventoScreen({route, navigation }) {
 
  let localizacaoDispositivo;
  const [ errorMsg, setErrorMsg ] = useState(null);
  const [ professor, setProfessor ] = useState();
  const [ texto, setTexto] = useState();
  const [ regiao, setRegiao ] = useState({
    latitude      : route.params?.latitude,
    longitude     : route.params?.longitude,
    latitudeDelta : route.params?.latitudeDelta,
    longitudeDelta: route.params?.longitudeDelta,
  });
 
  const destino = {
    latitude      : route.params?.latitude,
    longitude     : route.params?.longitude,   
  }

  async function localizarAluno() {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
    }

    let location = await Location.getLastKnownPositionAsync();
    localizacaoDispositivo = location.coords;
    checarPresenca(localizacaoDispositivo, destino)
  }

  async function checarPresenca(origem, destino) {

    const degrausParaRadiano = function (degraus) { return degraus * (Math.PI / 180); },
    raio = 6371,
    dLat = degrausParaRadiano(destino.latitude - origem.latitude),
    dLng = degrausParaRadiano(destino.longitude - origem.longitude),
    a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
      + Math.cos(degrausParaRadiano(origem.latitude))
      * Math.cos(degrausParaRadiano(origem.latitude))
      * Math.sin(dLng / 2) * Math.sin(dLng / 2),
    c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const resultado = raio* c *1000;
    if(resultado <= 1100 ){
      console.log(`Id aluno : ${route.params?.idAluno}`)
      console.log(`Id evento: ${route.params?.idEvento}`)
      
      await api.put(`aluno/atualizar/${route.params?.idAluno}/marcar_presenca/${route.params?.idEvento}`).then(() => setTexto(<Text>Presença confirmado</Text>))
    } else {
      console.log(localizacaoDispositivo);
      setTexto(<Text>Você está muito longe</Text>);
    }
  }

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (localizacaoDispositivo) {
    text = JSON.stringify(localizacaoDispositivo);
    //console.log(text)
  }



  useEffect(()=>{
    async function carregarDados(){
      await api.get(`professor/${route.params?.professor}`,{
        validateStatus: function (status) {
          return status < 500;
        }
      }).then(async (res)=>{
        await AsyncStorage.setItem('dados_professor', JSON.stringify(res.data));
        const dados_professor = JSON.parse(await AsyncStorage.getItem('dados_professor'));
        
        setProfessor( dados_professor.nome)   
      });
    };

    carregarDados();
  }, []);


  return (
    <ScrollView style={styles.corpo} >
      <View style={styles.container}>
      <TouchableOpacity style={styles.botao}  onPress={() => localizarAluno()  }>
          <Text style={styles.botaoTexto}>Checar presença</Text>
        </TouchableOpacity>
        <Text style={styles.texto}><Text style={{fontWeight: "bold"}}>Nome do evento:</Text> {route.params?.evento}</Text>
        <Text style={styles.texto}><Text style={{fontWeight: "bold"}}>Professor:</Text>  {professor}</Text>
        <Text style={styles.texto}><Text style={{fontWeight: "bold"}}>Data:</Text>  {route.params?.data.substring(10,0)}</Text>
        <Text style={styles.texto}>{route.params?.descricao}{"\n"}</Text>
        {texto}
        <MapView style={styles.mapStyle}
          initialRegion = {regiao} 
          showsUserLocation={true} 
          showsBuildings={true} 
          showsIndoors={true}
        >
          <Marker coordinate = {regiao} title ="Evento"/>
        </MapView>


      </View>
    </ScrollView>
  );
}

