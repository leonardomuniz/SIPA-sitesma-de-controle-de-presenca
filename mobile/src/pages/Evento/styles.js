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
      backgroundColor: "#1565C0",
      marginTop:15,
      marginBottom:10,
      padding: 15,
      borderRadius: 5,
    },
    botaoTexto: {
      fontSize: 20,
      color: '#fff',
      fontWeight: "bold",
      textTransform: "uppercase",
    }, 
    texto:{
        fontSize:17.5,  
    },
    mapStyle: {
        width:'100%',
        height: 450
    }
  });