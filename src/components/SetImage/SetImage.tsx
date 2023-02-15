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
    const [image, setImage] = useState("");

    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
        result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      console.log(typeof(result));

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const uploadImage = () => {

    console.log(typeof(image))
  }
  
    return (
        <View style={styles.component}>
            {image ? <ImageBackground
                      source={{uri: image}}
                      style={styles.image}>
            </ImageBackground>: null}
            <TouchableOpacity onPress={ () => {pickImage(); uploadImage()}} style={styles.test}>
                        <Image
                            source={props.addImage}
                            style={styles.camera}/>
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
        flex: 1,
        borderRadius: 125/2,
        height: 200,
        width: 200,
        resizeMode: 'contain',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        top: 10,
        
    },

    test: {
        justifyContent: 'flex-end',
        marginRight: 15,
    },

    camera: {
        height: 50,
        weight: 50,
        aspectRatio: 1,
        
    }
});