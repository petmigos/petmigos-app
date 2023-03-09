import { StyleSheet } from 'react-native';
import { background, erro, inputBackground, primary } from './colors';


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: background,
  },

  accessingButton: {
    backgroundColor: "#915E36",
    height: 56,
    // fontFamily: 'Ubuntu-Bold',
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
    marginTop: 20,
    marginBottom: 520,
    fontSize: 18,
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