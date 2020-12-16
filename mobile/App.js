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
const padrao = {
  
}


 

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" >
        <Stack.Screen name="Evento professor" component={EventoProfessorScreen}options={{
          ttile:"Informações Evento",
          headerStyle: {
            backgroundColor: '#1565C0',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="Cadastrar evento" component={CadastrarEventoScreen} options={{
          title: 'Cadastrar novo evento !',
          headerStyle: {
            backgroundColor: '#1565C0',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="Atualizar evento" component={AtualizarEventoScreen} options={{
          title: 'Atualizar evento',
          headerStyle: {
            backgroundColor: '#1565C0',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="Professor" component={ProfessorScreen} options={{
          title: 'Painel professor(a)',
          headerStyle: {
            backgroundColor: '#1565C0',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="Evento" component={EventoScreen} options={{
          title: 'Dados do evento: ',
          headerStyle: {
            backgroundColor: '#1565C0',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{
          title: 'Seja Bem-vindo(a) !',
          headerStyle: {
            backgroundColor: '#1565C0',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="Aluno" component={AlunoScreen} options={{
          title: 'Painel aluno(a)',
          headerStyle: {
            backgroundColor: '#1565C0',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="Relatorio" component={Relatorio} options={{
          title: 'Relatório do evento: ',
          headerStyle: {
            backgroundColor: '#1565C0',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="Lista de alunos" component={ListaAluno} options={{
          title: 'Lista de alunos: ',
          headerStyle: {
            backgroundColor: '#1565C0',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;