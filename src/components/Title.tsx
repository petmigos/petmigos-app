import React from "react";
import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    title:{
        lineHeight: 16,
        paddingTop: 30,
        marginBottom: 15,
        fontWeight: 'bold'
    }
})

const Title = ({ message, fontSize }) => {
    return(
        <Text style={[styles.title, {fontSize: fontSize}]}>
        {message}
        </Text>
    );

};

export default Title;