import React, { useState, useEffect }from 'react';
import api from '../../../services/api';
import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import MapView, {Marker} from 'react-native-maps';

import styles from './styles';

export default function CadastrarEventoScreen({navigation, route }) {
  const [ nomeEvento, setnomeEvento ] = useState(String);
  const [ dataEvento, setDataEvento ] = useState(String);
  const [ descricao, setDescricao ] = useState(String);
  const [ erro, setErro ] = useState(String);


  const [regiao, setRegiao] = useState({
    latitude: -15.7539088,
    longitude: -47.8793589,
    latitudeDelta: 0.0722,
    longitudeDelta: 0.0221,   
  });
  



  async function cadastrar(){
    await api.post('evento/cadastrar',{
      nome:nomeEvento,
      data:dataEvento,
      professor:route.params?.id,
      descricao: descricao,
      localizacao: regiao,
      alunos: route.params?.alunosInfos 
    },{
      validateStatus: function (status) {

        return status < 500; // Resolve only if the status code is less than 500
      }
    }).then(async (res) => {
      //console.log(res)
     
      if(res.status == 200){
        navigation.navigate('Professor')
      } else {
        setErro('Erro ao cadastrar evento')
      }

    });    
  }

  return (
    <ScrollView style={styles.corpo}>
      <View style={styles.container}>

        <View style={styles.formulario}>
          <TextInput style={styles.inputTexto} placeholder="Nome evento" value={nomeEvento} onChangeText={setnomeEvento}/>
          <TextInput style={styles.inputTexto} placeholder="Data do evento" value={dataEvento} onChangeText={setDataEvento} />
          <TextInput style={styles.inputTexto} placeholder="Descrição" value={descricao} onChangeText={setDescricao} />
        </View>

        <TouchableOpacity style={styles.botao} onPress={()=> navigation.navigate('Lista de alunos')} >
          <Text style={styles.botaoTexto}>Alunos</Text>        
        </TouchableOpacity>

        <MapView 
          style={styles.mapStyle}
          showsUserLocation={true} 
          showsBuildings={true} 
          showsIndoors={true}
          initialRegion = {regiao}
        >
          <Marker 
            draggable
            coordinate = {regiao}
            title ="Você está aqui !"
            onDragEnd={(evento) => {
              setRegiao({
                latitude: evento.nativeEvent.coordinate.latitude,
                longitude: evento.nativeEvent.coordinate.longitude,
                latitudeDelta: 0.0722,
                longitudeDelta: 0.0221,                 
              })
            }}
          />
        </MapView>

        <TouchableOpacity style={styles.botao} onPress={() => cadastrar()}>
          <Text style={styles.botaoTexto}>cadastrar</Text>        
        </TouchableOpacity>
        <Text>{erro}</Text>
      </View>

    </ScrollView>

  );
};

