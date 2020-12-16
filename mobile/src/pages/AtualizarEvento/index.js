import React, { useState }from 'react';
import api from '../../../services/api'; 
import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import styles from './styles';

export default function CadastrarEventoScreen({route, navigation }) {
  const [ atualizaAluno, setAtualizaAluno] = useState();
  const [ descricao, setDescricao] = useState();
  const [ nome, setNome ] = useState();
  const [ data, setData ] = useState();
  const [ regiao, setRegiao ] = useState({
    latitude      : route.params?.latitude,
    longitude     : route.params?.longitude,
    latitudeDelta : 0.0722,
    longitudeDelta: 0.0221,
  }); 


  return (
    <ScrollView style={styles.corpo}>
      <View style={styles.container}>
        <View style={styles.formulario}>
          <TextInput style={styles.inputTexto} placeholder={route.params?.nome} value={nome} onChangeText={setData}/>
          <TextInput style={styles.inputTexto} placeholder={route.params?.data} value={data} onChangeText={setNome} />
          <TextInput style={styles.inputTexto} placeholder={route.params?.descricao} value={descricao} onChangeText={setDescricao} />        
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

        <TouchableOpacity style={styles.botao} onPress={() => cadastrar()}>
          <Text style={styles.botaoTexto}>Atualizar</Text>        
        </TouchableOpacity>

      </View>     
 
    </ScrollView>

  );
};


