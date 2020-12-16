import React, { useState, useEffect }from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { Text, TouchableOpacity, View, ScrollView } from 'react-native';
import api from '../../../services/api';
import styles from './styles';


export default function ProfessorScreen({route, navigation }) {
  const [ listaEvento, setListaEvento ] = useState();
  const [ eventos, setEventos] = useState(Object);
  const [ nome, setNome] = useState('');

  useEffect(()=>{
    async function carregarDados(){
      
      const dados = JSON.parse( await AsyncStorage.getItem('dados_usuario'));

      setNome(dados.dados.nome);
      
      await api.get(`professor/${dados.dados._id}/eventos`).then(async (res)=>{
        await AsyncStorage.setItem('dados_evento', JSON.stringify(res.data));
        const dados_evento = JSON.parse(await AsyncStorage.getItem('dados_evento'));
        
        setEventos(dados_evento);
      });   
    
    }
    carregarDados();

  },[]);

  function compararDatas(data1, data2){
    if(data1.substring(4,0) == data2.substring(4,0)) {
      if(data1.substring(7,5) == data2.substring(7,5)){
        if(data1.substring(10,8) == data2.substring(10,8)){
          return "O evento é hoje !!"
        }
      } else if (data1.substring(7,5) > data2.substring(7,5)){
        return "o evento já aconteceu"
      } else {
        return "o evento irá acontecer em breve"
      }
    } else if (data1.substring(4,0) > data2.substring(4,0)) {
      return "o evento já aconteceu"
    } else {
      return "o evento irá acontecer em breve"
    }
  }
  function listaEventos() {
    const dataAtual = new Date().toISOString()

    const listaEvento = eventos.map((evento) => {
      return(
        <TouchableOpacity style={styles.card} key={evento._id} onPress={
          () => navigation.navigate('Evento professor', {
              id            : evento._id,
              nome          : evento.nome, 
              data          : evento.data,
              descricao     : evento.descricao,
              latitude      : evento.localizacao.latitude,
              longitude     : evento.localizacao.longitude,
              latitudeDelta : 0.0722,
              longitudeDelta: 0.0221,
          })
        }>
          <Text style={styles.cardText}>Nome: {evento.nome}</Text>
          <Text style={styles.cardText}>Data: {evento.data.substring(10,0)}</Text>
          <Text style={styles.cardText}>Concluido:{ compararDatas(dataAtual, evento.data)}</Text>         
        </TouchableOpacity>
      );
    }).reverse();
    return listaEvento
  }


  return (
    <ScrollView style={styles.corpo} >
      <View style={styles.container}>

        <Text style={styles.texto}>Bem-vindo Professor(a) <Text style={{fontWeight:"bold"}}>{nome}</Text></Text>
        
        <TouchableOpacity style={styles.botao} onPress={()=> navigation.navigate('Cadastrar evento')}>
          <Text style={styles.botaoTexto}>Criar Evento</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.botao} onPress={()=> setListaEvento(listaEventos())}>
          <Text style={styles.botaoTexto}>Eventos</Text>
        </TouchableOpacity>
        {listaEvento}
        
      </View>    
    </ScrollView>
  );
}

