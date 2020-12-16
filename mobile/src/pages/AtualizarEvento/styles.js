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
    formulario:{
      marginTop: 10,
    },      
  
    botao: {      
      backgroundColor: "#1565C0",
      marginTop:15,
      marginBottom:10,
      padding: 10,
      borderRadius: 5,
    },

    botaoTexto: {
      fontSize: 20,
      color: '#fff',
      fontWeight: "bold",
      textTransform: "uppercase",
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
      borderColor:"#bdbdbd",
      backgroundColor: 'white'
    },
    mapStyle: {
      width:'100%',
      height: 450
    }
  });