import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import styles from './styles';
import api from '../../../services/api';

export default function CadastrarEventoScreen({ route, navigation }) {
  const [confirmacao, setConfirmar] = useState();
  const [info, setInfo] = useState({
    id: route.params?.id,
    nome: route.params?.nome,
    data: route.params?.data,
    descricao: route.params?.descricao,
    latitude: route.params?.latitude,
    longitude: route.params?.longitude,
  });
  const [regiao, setRegiao] = useState({
    latitude: route.params?.latitude,
    longitude: route.params?.longitude,
    latitudeDelta: route.params?.latitudeDelta,
    longitudeDelta: route.params?.longitudeDelta,
  });


  function confirmar() {
    return (
      <View>
        <Text style={{ textAlign: "center" }}>Tem certeza ?</Text>
        <View style={styles.funcoes}>
          <TouchableOpacity style={styles.botaoSeparado} onPress={() => deletar()}>
            <Text style={styles.botaoTexto}>Sim</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botaoSeparado} onPress={() => atualizar()}>
            <Text style={styles.botaoTexto}>Não</Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }

  function atualizar() {
    return setConfirmar(<Text>  </Text>);
  }

  async function deletar() {
    await api.delete(`professor/eventos/deletar/${route.params?.id}`).then(() => navigation.navigate('Professor'))
  }

  return (
    <ScrollView style={styles.corpo} >

      <View style={styles.container}>

        <View style={styles.funcoes}>
          <TouchableOpacity style={styles.botaoSeparado} onPress={() => navigation.navigate("Atualizar evento", info)}>
            <Text style={styles.botaoTexto}>Atualizar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botaoSeparado} onPress={() => setConfirmar(confirmar())}>
            <Text style={styles.botaoTexto}>Deletar</Text>
          </TouchableOpacity>
        </View>
        {confirmacao}

        <Text style={styles.texto}><Text style={{ fontWeight: "bold" }}>Nome do evento:</Text> {route.params?.nome}</Text>
        <Text style={styles.texto}><Text style={{ fontWeight: "bold" }}>Data:</Text> {route.params?.data.substring(10, 0)}</Text>
        <Text style={styles.texto}><Text style={{ fontWeight: "bold" }}>Descrição:</Text> {route.params?.descricao}{"\n"}</Text>

        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Relatorio', info)} >
          <Text style={styles.botaoTexto}>Relatório</Text>
        </TouchableOpacity>

        <MapView style={styles.mapStyle} initialRegion={regiao}>
          <Marker coordinate={regiao} title="Você está aqui !"/>
        </MapView>

      </View>


    </ScrollView>

  );
};

