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
        marginTop: 200
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
    }

  });