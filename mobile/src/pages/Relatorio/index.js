import React, { useState, useEffect }from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { View, Text, FlatList, } from 'react-native';
import styles from './styles';
import api from '../../../services/api';

export default function Relatorio({ route, navigation }){
    const [ relatorio, setRelatorio ] = useState();
    const dataAtual = new Date().toISOString()

    useEffect(()=>{
        async function carregarDados(){
               
            await api.get(`evento/${route.params?.id}`).then(async (res) => {
                await AsyncStorage.setItem('dados_relatorio', JSON.stringify(res.data));
                const dados_relatorio = JSON.parse(await AsyncStorage.getItem('dados_relatorio'));
        
                setRelatorio(dados_relatorio.alunos);
              });
          };
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
    return(
        <View>
            <Text style={styles.texto}><Text style={styles.titulo}>nome:</Text> {route.params?.nome}</Text>
            <Text style={styles.texto}><Text style={styles.titulo}>Data:</Text> {route.params?.data.substring(10, 0)}</Text>
            <Text style={styles.texto}><Text style={styles.titulo}>Status:</Text> {compararDatas(dataAtual, route.params?.data)}</Text>
            <Text style={styles.texto}><Text style={styles.titulo}>Descrição:</Text> {route.params?.descricao}</Text>
            <Text style={styles.texto}>{'\n'}<Text style={styles.titulo}>LISTA DE ALUNOS</Text>{'\n'}</Text>
            <FlatList
                keyExtractor={(item) => item.aluno.id}
                data={relatorio}
                renderItem={({item}) => <Text style={styles.texto}>{item.presente == true ? <Text style={styles.presente}>Presente: </Text> : <Text style={styles.ausente}>Ausente: </Text>}{item.aluno.nome}</Text>}
            />

        </View>
    )
}