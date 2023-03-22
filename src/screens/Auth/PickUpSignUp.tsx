import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { color } from "react-native-reanimated";
import {
  background,
  desabilitado,
  primary,
  secondary_v2,
  sucesso,
} from "../../styles/colors";

const PickUpSignUp: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button]}
        onPress={() => navigation.navigate("CadastroScreen")}
      >
        <View style={styles.logoContainer}>
          <Image
            source={require("../../../assets/pickLogo_2.png")}
            style={styles.logo}
          />
        </View>
        <Text style={{ fontSize: 16, fontWeight: "bold", color: secondary_v2 }}>
          Usuário
        </Text>
        <Text style={{ color: "#FFF" }}>
          Quero usar o PetMigos para cuidar do meu pet e fazer novos amigos!
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button]}
        onPress={() => navigation.navigate("SignUpCompany")}
      >
        <View style={styles.logoContainer}>
          <Image
            source={require("../../../assets/pickLogo.png")}
            style={styles.logo}
          />
        </View>
        <Text style={{ fontSize: 16, fontWeight: "bold", color: secondary_v2 }}>
          Empresa
        </Text>
        <Text style={{ color: "#FFF" }}>
          Quero oferecer meus serviços e produtos no aplicativo!
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: primary,
    height: "100%",
  },
  button: {
    width: "50%",
    height: "25%",
    textAlign: "center",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: secondary_v2,
    padding: 20,
  },

  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    width: 90,
    height: 90,
  },

  textContainer: {
    flexDirection: "column",
    //alignItems: 'center',
    textAlign: "justify",
    maxWidth: "70%",
    padding: 10,
  },
});
export default PickUpSignUp;
