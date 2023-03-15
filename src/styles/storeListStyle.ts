import { StyleSheet, StatusBar } from "react-native";

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
  });