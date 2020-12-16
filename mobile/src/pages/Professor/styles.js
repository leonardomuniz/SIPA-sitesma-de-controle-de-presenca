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
    texto:{
      fontSize: 20,
      paddingTop: 25,
      paddingBottom: 15,
      textAlign:"center"
    },  
    botao: {
      backgroundColor: "#1565C0",
      justifyContent:"center",
      marginTop:10,
      marginBottom:10,
      padding: 15,
      borderRadius: 5,
      width: "50%"
    },
    botaoTexto: {
        fontSize: 15,
        color: "#fff",
        textAlign:"center",
        fontWeight: "bold",
        textTransform: "uppercase",
    }, 
    card: {
      backgroundColor:"white",
      marginTop:5,
      marginBottom:5,
      height:105,
      width:"95%",
      borderRadius: 5,
      borderWidth:0.5,
      borderColor:"#e0e0e0",
    },
    cardText: {
        paddingLeft:15,
        marginTop:5,
        fontSize: 20,
        color: '#333',
    },
  });