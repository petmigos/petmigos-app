import { StyleSheet } from 'react-native';
import { background, erro, inputBackground, primary } from './colors';


export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: background,
    },

    topContainer: {
        flex: 1,
        backgroundColor: background,
        justifyContent: 'flex-start',
        alignItems: 'center',

    },

    topText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 35,
    },

    middleScreen: {
        flex: 2,
        backgroundColor: background,
    },

    selectList: {
        margin: 20,
    },


    input_box: {
        marginTop: 20,
        marginRight: 20,
        marginLeft: 20,
        borderWidth: 1,
        padding: 10,
        backgroundColor: inputBackground,
        borderRadius: 6,
        opacity: 0.5,
        fontSize: 18,
        borderColor: '#fff',
    },

    picker: {
        borderRadius: 10,
        overflow: 'hidden',
        opacity: 0.5,
        marginLeft: 20,
        backgroundColor: inputBackground,
        marginBottom: 20,
        marginTop: 20,
        marginRight: 20,
        color: 
    },

    pickCategory: {

    },

    acessingButton: {
        marginTop: 20,
        marginRight: 0,
        marginLeft: 0,
    },

    accessingButton: {
        backgroundColor: '#915E36',
        height: 56,
        // fontFamily: 'Ubuntu-Bold',
        fontStyle: 'normal',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 20,
        borderRadius: 8,
    },

    gettingText: {
        fontSize: 18,
        fontWeight: "bold",
        top: 15,
        color: '#FFFFFF'
    },


});