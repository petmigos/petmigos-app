import { StyleSheet, StatusBar } from "react-native";
import { ScreenHeight } from "react-native-elements/dist/helpers";
import { desabilitado } from "./colors";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingBottom: 50,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
    warning_container:{
      display: 'flex',
      height: ScreenHeight,
      alignItems: 'center',
      justifyContent: 'center'
    },
    warning: {
      fontSize: 20,
      fontWeight: "bold",
      color: desabilitado
    }
  });