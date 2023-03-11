import { StyleSheet, StatusBar } from 'react-native';
import { background, erro, inputBackground, primary } from './colors';


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: background,
    paddingTop: 20,
  },

  scroll: {
    marginTop: 20,
  },

  button: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 10,
  },

  accessingButton: {
    backgroundColor: "#915E36",
    height: 56,
    fontStyle: "normal",
    alignItems: "center",
    textAlign: "center",
    marginBottom: 60,
    borderRadius: 5,
    marginRight: 20,
    marginLeft: 20,
    resizeMode: "contain",
  },

  loading: {
    fontSize: 18,
    marginTop: 20,
    textAlign: "center",
    fontWeight: "bold",
  },

  gettingText: {
    fontSize: 18,
    fontWeight: "bold",
    top: 15,
    color: "#FFFFFF",
  },
});