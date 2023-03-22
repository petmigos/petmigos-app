import { Text, View, Image, TouchableOpacity} from "react-native";
import { StyleSheet } from "react-native";
import { erro } from "../styles/colors";


const images = {
  button: require("../../assets/Vector.png"),
};

type ButtonProps = {
    onPress: () => void;
};

export const AddButton = (props: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.header} onPress={props.onPress}>
      <Image source={images.button} style={{width: 60, height: 60, }}/>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  header: {},

});
