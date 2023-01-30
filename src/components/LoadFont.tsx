import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import * as Font from 'expo-font';

const LoadFont = (fontName:string) => {
    const [isFontLoaded, setIsFontLoaded] = useState(false);
    const path = '../../assets/fonts/'+ String(fontName)
    useEffect(() => {
      const loadFont = async () => {
        await Font.loadAsync({
          'Ubuntu': require('../../assets/fonts/Ubuntu-Regular.ttf'),
        });
        setIsFontLoaded(true);
      };
      loadFont();
    }, []);

    return isFontLoaded;
  };
  
  export default LoadFont;