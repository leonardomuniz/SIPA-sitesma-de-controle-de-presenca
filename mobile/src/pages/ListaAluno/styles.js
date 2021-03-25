import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },
  botao: {
    backgroundColor: "#1565C0",
    marginTop: 10,
    marginBottom: 10,
    padding: 15,
    borderRadius: 5,
  },
  botaoTexto: {
    fontSize: 20,
    color: '#fff',
    textTransform: "uppercase",
    fontWeight: "bold"
  }
})