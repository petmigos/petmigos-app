import { StyleSheet } from 'react-native';
import { background, desabilitado, erro, primary } from '../../styles/colors';

export default StyleSheet.create({
    
    component: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        backgroundColor: background,
        width: 89,
        height: 100,
        marginBottom: 8,
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        width: 70,
        backgroundColor: background,
        borderColor: primary,
        borderWidth: 1,
        borderRadius: 14,
        margin: 10,
    },

    text: {
        fontSize: 12,
    },

    
});