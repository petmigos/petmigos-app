import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Float } from "react-native/Libraries/Types/CodegenTypes";
import { inputBackground } from "../styles/colors";
import { Platform } from "react-native";

interface InputProps {
    message: string;
    width?: Float;
    marginBtm?: Float;
    marginLeft?: Float;
    value?;
    changeText?;
    number?: boolean;
    edit?: boolean;
}

  const styles = StyleSheet.create({
    input:{
        height: 57,        
        padding: 10,
        borderRadius: 6,
        fontSize: 18,
        borderColor: '#fff',
        backgroundColor: inputBackground
    }
});

const Input: React.FC<InputProps> =  (
    { message, 
      width=343, 
      marginBtm=20, 
      marginLeft=null,
      value, 
      changeText, 
      number=false,
      edit=true
    }) => {
    return(
        <View>
            <TextInput placeholder={message} 
            style={
                [styles.input, {width: width}, {marginBottom: marginBtm}, {marginLeft: marginLeft},
                edit? {opacity: 0.9}: {opacity: 0.5}]}
            onChangeText={changeText}
            value={value}
            keyboardType={`${number? "number-pad": null}`}
            editable={edit}
            placeholderTextColor="#bbb"
            >
            </TextInput>
        </View>
    );
};

export default Input;