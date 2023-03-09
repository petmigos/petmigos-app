import { StyleSheet, StatusBar } from 'react-native';
import { background, erro, inputBackground, primary } from './colors';


export default StyleSheet.create({

    container: {
        marginTop: StatusBar.currentHeight || 0,
        flex: 1,
        backgroundColor: background,
    },

    accessingButton: {
        backgroundColor: '#915E36',
        height: 56,
        // fontFamily: 'Ubuntu-Bold',
        fontStyle: 'normal',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 60,
        borderRadius: 5,
        marginRight: 20,
        marginLeft: 20,
        resizeMode: 'contain',

    },

    gettingText: {
        fontSize: 18,
        fontWeight: "bold",
        top: 15,
        color: '#FFFFFF'
    },


});