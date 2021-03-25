import React, { useState }from 'react';
import api from '../../../services/api'; 
import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import styles from './styles';

export default function CadastrarEventoScreen({route, navigation }) {
  const [ atualizaAluno, setAtualizaAluno] = useState();
  const [ descricao_evento, setDescricao] = useState();
  const [ nome_evento, setNome ] = useState();
  const [ data_evento, setData ] = useState();
  const [ regiao, setRegiao ] = useState({
    latitude      : route.params?.latitude,
    longitude     : route.params?.longitude,
    latitudeDelta : 0.0722,
    longitudeDelta: 0.0221,
  }); 


  async function atualizar(){
    await api.put(`evento/atualizar/${route.params?.id}`,{
      nome:nome_evento,
      data:data_evento,
      descricao: descricao_evento,
      localizacao: regiao
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
          <TextInput style={styles.inputTexto} placeholder={route.params?.nome} value={nome_evento} onChangeText={setNome}/>
          <TextInput style={styles.inputTexto} placeholder={route.params?.data} value={data_evento} onChangeText={setData} />
          <TextInput style={styles.inputTexto} placeholder={route.params?.descricao} value={descricao_evento} onChangeText={setDescricao} />        
        </View>

        <TouchableOpacity style={styles.botao} onPress={()=> navigation.navigate('Lista de alunos')}  >
          <Text style={styles.botaoTexto}>Alunos</Text>        
        </TouchableOpacity>

        <MapView style={styles.mapStyle} initialRegion = {regiao}>
          <Marker 
            draggable
            coordinate = {regiao}
            title ="Você está aqui !"

            onDragEnd={(evento) => {
              setRegiao.latitude = evento.nativeEvent.coordinate.latitude,
              setRegiao.longitude = evento.nativeEvent.coordinate.longitude,
              console.log(regiao)
            }}
          />
        </MapView>

        <TouchableOpacity style={styles.botao} onPress={() => atualizar()}>
          <Text style={styles.botaoTexto}>Atualizar</Text>        
        </TouchableOpacity>

      </View>     
 
    </ScrollView>

  );
};


