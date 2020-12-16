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
        marginTop: 50
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
      textTransform:"uppercase",
      color: "#fff",
    }, 
    erroText:{
      fontSize: 20,
      color: "#ffc107",
    },
    inputTexto:{
        height: 50, 
        width: 300, 
        marginBottom:10, 
        paddingVertical: 15, 
        paddingHorizontal:15,
        borderRadius: 5,
        fontSize:15,
        borderWidth:0.5,
        borderColor:"#9e9e9e",
        backgroundColor: "white",
    },
    stretch: {
      width: 150,
      height: 150,
      marginBottom:15
    },
    titulo:{
      fontSize:50,
      fontWeight: "bold",
      marginBottom:15      
    }
  });