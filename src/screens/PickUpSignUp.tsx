import SignUpCompany from './SignUpCompany';
import { StyleSheet, View, Image, Button } from "react-native";
import { secondary_v2 } from './styles/colors';


const PickUpSignUp = ({ navigation }) => { 
  return (
    <View>
      <Button
        title="QUERO VENDER NO APP"
        onPress={navigation.navigate(SignUpCompany)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor: secondary_v2,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  img:{
    height: 200,
    width: 200
  }
})

export default PickUpSignUp;
