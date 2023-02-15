import { StyleSheet } from  'react-native';
import { background, inputBackground } from '../styles/colors';

export const compSignUpStyle = StyleSheet.create({

    load: {
        width: 80,
        height: 80
    },

    container:{
        alignItems: 'center',
        backgroundColor: background,
    },
    img:{
        width: 112,
        height: 94,
        margin: 10
    },
    errorMsg:{
        color: '#FF0000',
        marginTop: -20,
        marginBottom: 15
    },

    pickCategory:{
        width: 343,
        backgroundColor: inputBackground,
        borderRadius: 6,
        opacity: 0.6,
        marginBottom: 20

    },
    small_input:{
        flexDirection: 'row', 
        alignItems: 'stretch',
        justifyContent: 'space-between'
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
})