import { StyleSheet } from 'react-native';
import { erro, primary } from './colors';


export default StyleSheet.create({

    container: {
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },

    middle_screen: {
        width: 320,
    },
   

    input_box: {
        height: 57,
        marginTop: 20,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#DCDCDC',
        borderRadius: 6,
        opacity: 0.5,
        fontSize: 18,
        borderColor: '#fff',
    },

    acessing_button: {
        backgroundColor: '#915E36',
        height: 56,
        // fontFamily: 'Ubuntu-Bold',
        fontStyle: 'normal',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 20,
        borderRadius: 8,
    },

    getin_text: {
        fontSize: 18,
        fontWeight: "bold",
        top: 15,
        color: '#FFFFFF'
    },

    privacy_text_link: {
        color: '#A04D0B',
        fontSize: 12,
        textDecorationLine: "underline",
    },

    bottom_text: {

        color: '#000000',
        width: 310,
        // fontFamily: 'Ubuntu-Regular',
        fontStyle: 'normal',
        paddingTop: 10,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems:'center',
        fontSize: 12,
        
    },

    forgot_pass_text: {
        color: '#000000',
        // fontFamily: 'Ubuntu_400Regular',
        fontStyle: 'normal',
        padding: 10,
        fontSize: 14,
        opacity: 0.5,
        textAlign: 'center'
    },

    googlebutton: {
        flex: 0,
        width: null,
        resizeMode: 'contain',

    },

    dont_have_account_text: {
        color: '#000000',
        // fontFamily: 'Ubuntu_400Regular',
        fontStyle: 'normal',
        top: 20.5,
        fontSize: 14,
        left: -50,

    },

    sign_up_area:{
        backgroundColor: 'red',
        color: '#00000',
        right: -65,
        top: 2,
    },

    sign_up_text:
    {
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        fontSize: 14,
        marginLeft: 130,
    },

    sign_up_button:
    {
        border: 'none',
        style: 'transparent',
        color: 'white',
        top: 1,
        left: 70,
    },

    check_box_container: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        
    },

    checkbox: {
        alignSelf: 'flex-start',
        margin: 10
    },

    label: {
        margin: 10,
        fontWeight: 'normal'
    },

    button_cadastro: {
        backgroundColor: erro,
    },

    enable: {
        backgroundColor: primary,
    }



});