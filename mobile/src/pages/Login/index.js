import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import styles from './styles';
import api from '../../../services/api';

export default function LoginScreen({ navigation }) {
  const [matricula, setMatricula] = React.useState('');
  const [erro, setErro] = React.useState('');
  const [senha, setSenha] = React.useState('');

  async function logar() {
    api.post('autenticacao', { matricula: matricula, senha: senha }, {
      validateStatus: function (status) {
        return status < 500;
      }
    }).then(async (res) => {
      setErro(' ')
      if (res.status == 200) {
        await AsyncStorage.setItem('dados_usuario', JSON.stringify(res.data))

        const dados_usuario = await AsyncStorage.getItem('dados_usuario')

        if (matricula.length == 6) {
          navigation.navigate('Professor');
        } else if (matricula.length == 4) {
          navigation.navigate('Aluno');
        };

      } else {
        setErro('O usuario não existe');
      };

    });
  };
  return (
    <View style={styles.corpo}>
      <View style={styles.container}>
        <Image
        style={styles.stretch}
        source={require('../../../assets/owl.png')}
        />
        <Text style={styles.titulo}>S.I.P.A</Text>
        <TextInput style={styles.inputTexto} placeholder="Matricula" value={matricula} onChangeText={setMatricula} />
        <TextInput style={styles.inputTexto} secureTextEntry={true} placeholder="senha" value={senha} onChangeText={setSenha} />
        <TouchableOpacity style={styles.botao} onPress={() => logar()}>
          <Text style={styles.botaoTexto}>Logar</Text>
        </TouchableOpacity>
        <Text>{erro}</Text>
      </View>
    </View>
  );

}

