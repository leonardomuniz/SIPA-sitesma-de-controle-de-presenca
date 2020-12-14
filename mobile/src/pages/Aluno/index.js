import React, { useState, useEffect } from 'react';
import api from '../../../services/api'; 
import AsyncStorage from '@react-native-community/async-storage';
import { Text, TouchableOpacity,ScrollView, View } from 'react-native';
import styles from './styles';

export default function LoginScreen({ navigation  }) {
  const [ listaEventoPresente, setListaEventoPresente ] = useState();
  const [ listaEventoFaltante, setListaEventoFaltante ] = useState();
  const [ eventoFaltante, setEventoFaltante ] = useState();
  const [ eventoPresente, setEventoPresente ] = useState();

  const [ nome, setNome] = useState('');
  const [ idAluno, setIdAluno ] = useState('');

  useEffect(()=>{
    async function carregarDados(){
      
      const dados = JSON.parse( await AsyncStorage.getItem('dados_usuario'));
      setNome(dados.dados.nome);
      setIdAluno(dados.dados._id);


      await api.get(`aluno/${dados.dados._id}/eventos_presente`,{
        validateStatus: function (status) {
          return status < 500; 
        }
      }).then(async (res)=>{
        await AsyncStorage.setItem('dados_presente', JSON.stringify(res.data));
        const dados_presente = JSON.parse(await AsyncStorage.getItem('dados_presente'));
        
        setEventoPresente(dados_presente);
      });

      
      await api.get(`aluno/${dados.dados._id}/eventos_ausente`,{
        validateStatus: function (status) {
          return status < 500;
        }
      }).then(async (res)=>{
        await AsyncStorage.setItem('dados_ausente', JSON.stringify(res.data));
        const dados_ausente = JSON.parse(await AsyncStorage.getItem('dados_ausente'));
        
        setEventoFaltante(dados_ausente);     
      });

    };
    
    carregarDados();


  },[]);


  function listaPresentes() {
    const listaPresentes = eventoPresente.map((presente) => {
      return(
        <TouchableOpacity style={styles.card} onPress={()=> navigation.navigate('Evento', {
          data          : presente.data,
          descricao     : presente.descricao,
          evento        : presente.nome,
          latitude      : presente.localizacao.latitude,
          longitude     : presente.localizacao.longitude,
          latitudeDelta : 0.0722,
          longitudeDelta: 0.0221,
          idEvento      : presente._id,  
          professor     : presente.professor,
        })} key={presente._id}>
          <Text style={styles.cardText}>Nome: {presente.nome}</Text>
          <Text style={styles.cardText}>Data: {presente.data}</Text>
        </TouchableOpacity>

      );
    }).reverse();
    return listaPresentes;
  };

  function listaFaltantes() {
    const listaFaltante = eventoFaltante.map((presente) => {
      return(
        <TouchableOpacity style={styles.card} onPress={()=> navigation.navigate('Evento', {
          data          : presente.data,
          descricao     : presente.descricao,
          evento        : presente.nome,
          latitude      : presente.localizacao.latitude,
          longitude     : presente.localizacao.longitude,
          latitudeDelta : 0.0722,
          longitudeDelta: 0.0221,
          idEvento      : presente._id,
          idAluno       : idAluno, 
          professor     : presente.professor,
        })} key={presente._id}>
          <Text style={styles.cardText}>Nome: {presente.nome}</Text>
          <Text style={styles.cardText}>Data: {presente.data}</Text>
        </TouchableOpacity>

      );
    }).reverse();
    return listaFaltante;
  };


  return (
    <ScrollView style={styles.corpo}>
      <View style={styles.container}>
        <Text style={styles.texto}>
          Seja bem-vindo(a) 
          <Text style={{fontWeight:"bold"}}>{nome}</Text>
        </Text>
        <TouchableOpacity style={styles.botao} onPress={()=> setListaEventoFaltante(listaFaltantes()) }>
          <Text style={styles.botaoTexto}>Evento Faltantes</Text>
        </TouchableOpacity>
        {listaEventoFaltante}
        <TouchableOpacity style={styles.botao} onPress={()=> setListaEventoPresente(listaPresentes()) }>
          <Text style={styles.botaoTexto}>Evento Presentes</Text>
        </TouchableOpacity>
        {listaEventoPresente}
      </View>
    </ScrollView>

  );

}

