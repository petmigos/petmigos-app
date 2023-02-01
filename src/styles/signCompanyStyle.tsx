import { StyleSheet } from  'react-native';
import { background, inputBackground } from '../styles/colors';

export const compSignUpStyle = StyleSheet.create({
    img_container:{
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100%'
    },
    load: {
        width: 80,
        height: 80
    },

    container:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: background
    },
    img:{
        width: 112,
        height: 94,
        margin: 10
    },
    containerAdress:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    errorMsg:{
        color: '#FF0000',
        marginTop: -20,
        marginBottom: 15
    },

    pickCategory:{
        borderRadius: 20,
        width: 343,
        backgroundColor: inputBackground,
        opacity: 0.5,
        marginBottom: 20

    }
})