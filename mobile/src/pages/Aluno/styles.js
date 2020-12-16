import { StyleSheet } from "react-native";

export default StyleSheet.create({
    corpo: {
        margin: 0,
        padding: 0,
    },
    container:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
    },
    texto:{
      fontSize: 20,
      paddingTop: 25,
      paddingBottom: 25,
      textAlign:"center"
    },  
  
    botao: {
      backgroundColor: "#1565C0",
      justifyContent:'center',
      marginTop:10,
      marginBottom:10,
      padding: 15,
      borderRadius: 5,
      width: '50%'
    },
    botaoTexto: {
        fontSize: 20,
        color: '#fff',
        fontWeight: "bold",
        textTransform: "uppercase",
    }, 
    card: {
      backgroundColor: "white",
      justifyContent:'center',
      marginTop:15,
      marginBottom:10,
      padding: 20,
      borderRadius: 5,
      width: '90%'
    },
    cardText: {
      marginLeft:15,
      marginTop:5,
      fontSize: 20,
      color: '#333',
    }, 


  });