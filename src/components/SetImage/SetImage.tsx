import { ImageBackground, StyleSheet } from 'react-native';
import { Text, View, Image, TouchableOpacity, ImageSourcePropType } from 'react-native';
import React from 'react';
import { background, erro, primary } from '../../styles/colors';
import { Input } from 'react-native-elements';
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

type ImageProps = {
    image: ImageSourcePropType;
    addImage: ImageSourcePropType;
};

export let result;

export const SetImage = (props: ImageProps) => {
    const [image, setImage] = useState("../../../assets/user_icon.png");

    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
        result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      upload.single(image)
    }
  };

  
    return (
        <View style={styles.component}>
                <TouchableOpacity onPress={ () => {pickImage();}}>
                {image ? <Image
                        source={{uri: image}}
                        style={styles.image}/>: null}
            </TouchableOpacity>
        </View> 
    );
};

const styles = StyleSheet.create({

    component: {
        flex: 1,
        backgroundColor: background,
    },
    
    image: {
      marginTop: 10,
        flex: 1,
        borderRadius: 250,
        height: 200,
        width: 200,
        resizeMode: 'center',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        
    },


});