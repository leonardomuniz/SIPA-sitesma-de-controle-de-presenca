import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    corpo: {
        margin: 0,
        padding: 0,
    },
    container:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    funcoes:{
        flexDirection:"row",
    },
    botao: {
      backgroundColor: "#1565C0",
      marginTop:15,
      marginBottom:10,
      padding: 15,
      borderRadius: 5,
    },
    botaoSeparado: {
      backgroundColor: "#1565C0",
      marginTop:15,
      marginBottom:10,
      marginRight:15,
      padding: 15,
      borderRadius: 5,
    },
    botaoTexto: {
      fontSize: 20,
      color: '#fff',
      textTransform:"uppercase",
      fontWeight:"bold"
    }, 
    texto:{
      fontSize:17.5,
      
    },
    mapStyle: {
      width:'100%',
      height: 450
    }
  });