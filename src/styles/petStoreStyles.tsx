import { StyleSheet } from 'react-native';
import { background, erro, primary, secondary, secondary_v2 } from './colors';

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: background,
        height: 780,
        alignContent: 'center',
        textAlign: 'center',
    },

    topContainer: {
        flex: 2,
        backgroundColor: background,
        textAlign: 'flex-start',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginTop: 10,
        marginRight: 15,
        marginLeft: 15,
    },

    bottomContainer: {
        flex: 4.5,
    }



});
