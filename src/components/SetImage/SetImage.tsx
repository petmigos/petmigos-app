import { ImageBackground, StyleSheet } from 'react-native';
import { Text, View, Image, TouchableOpacity, ImageSourcePropType } from 'react-native';
import React from 'react';
import { background, erro, primary } from '../../styles/colors';

type ImageProps = {
    image: ImageSourcePropType;
    addImage: ImageSourcePropType;
};

export const SetImage = (props: ImageProps) => {
    return (
        <View style={styles.component}>
            <ImageBackground
                source={props.image}
                style={styles.image}>
                <TouchableOpacity style={styles.test}>
                        <Image
                            source={props.addImage}
                            style={styles.camera}/>
                    </TouchableOpacity>
            </ImageBackground>
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
        borderRadius: 100,
        aspectRatio: 1,
        resizeMode: 'contain',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',

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