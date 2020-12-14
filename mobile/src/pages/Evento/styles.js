import { StyleSheet } from "react-native";

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
    botao: {
      backgroundColor: "blue",
      marginTop:15,
      marginBottom:10,
      padding: 20,
      borderRadius: 5,
    },
    botaoTexto: {
      fontSize: 20,
      color: '#fff',
    }, 
    texto:{
        fontSize:17.5,  
    },
    mapStyle: {
        width:'100%',
        height: 450
    }
  });