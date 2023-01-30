import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Float, Int32 } from "react-native/Libraries/Types/CodegenTypes";
import { FlowArrayMutation } from "typescript";

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
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#DCDCDC',
        borderRadius: 6,
        opacity: 0.5,
        fontSize: 18,
        borderColor: '#fff',
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
            style={[styles.input, {width: width}, {marginBottom: marginBtm}, {marginLeft: marginLeft}]}
            onChangeText={changeText}
            value={value}
            keyboardType={`${number? "number-pad": null}`}
            editable={edit}
            >
            </TextInput>
        </View>
    );
};

export default Input;