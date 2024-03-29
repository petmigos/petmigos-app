import { StatusBar } from 'react-native';
import { StyleSheet } from 'react-native';
import { background, erro, primary, secondary, secondary_v2 } from './colors';

export default StyleSheet.create({
    
  container: {
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: background,
    marginBottom: 50,
  },

  topContainer: {
    //flex: 2,
    backgroundColor: background,
    textAlign: "flex-start",
    justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "wrap",
    flexDirection: "row",
    marginTop: 10,
    marginHorizontal: 0,
  },

  bestSellersText: {
    fontSize: 25,
    marginLeft: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },

  list: {
    backgroundColor: background,
  },

  ads: {
    height: 185,
  },
});
