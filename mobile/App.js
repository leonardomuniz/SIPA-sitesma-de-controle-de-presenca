import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AtualizarEventoScreen from './src/pages/AtualizarEvento/index';
import EventoProfessorScreen from './src/pages/EventoProfessor/index';
import CadastrarEventoScreen from './src/pages/CadastrarEvento/index';
import ProfessorScreen from './src/pages/Professor/index';
import EventoScreen from './src/pages/Evento/index';
import LoginScreen from './src/pages/Login/index';
import AlunoScreen from './src/pages/Aluno/index';
import Relatorio from './src/pages/Relatorio/index';
import ListaAluno from './src/pages/ListaAluno/index';

const Stack = createStackNavigator();



 

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Evento professor" component={EventoProfessorScreen} />
        <Stack.Screen name="Cadastrar evento" component={CadastrarEventoScreen} />
        <Stack.Screen name="Atualizar evento" component={AtualizarEventoScreen} />
        <Stack.Screen name="Professor" component={ProfessorScreen} />
        <Stack.Screen name="Evento" component={EventoScreen}/>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Aluno" component={AlunoScreen}/>
        <Stack.Screen name="Relatorio" component={Relatorio}/>
        <Stack.Screen name="Lista de alunos" component={ListaAluno}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;