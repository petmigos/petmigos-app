import { StyleSheet } from  'react-native';
import { background, inputBackground } from '../styles/colors';

export const compSignUpStyle = StyleSheet.create({

    load: {
        width: 80,
        height: 80
    },

    container:{
        display: "flex",
        flexDirection: "column",
        alignItems: 'center',
        backgroundColor: background,
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

    topContainer: {
        display: "flex",
        height: "22%",
        backgroundColor: background,
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: "25%"
    },
})