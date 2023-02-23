import {Text, View, StatusBar } from 'react-native';
import React from 'react';

const StorePage = ({ route }) =>{

    const { store } = route.params;

    return(
        <View style={{marginTop: 100}}>
        <Text >{store.name}</Text>
        </View>
    )
}



export default StorePage;