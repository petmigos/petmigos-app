import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';

type ErrorProps = {
    error_text: string;
};

export const ValidationMessage = (props: ErrorProps) => {
    return (
        <View style={styles.error_box}>
            <Text style={styles.error_text}>
                {props.error_text}
            </Text>
        </View>
    );
};

const styles=  StyleSheet.create({

    error_box: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 16,
        marginLeft: 9,
        marginRight: 9
    },

    error_text: {
        color: '#ff6b6b',
        // fontFamily: 'Ubuntu-Bold',
        fontWeight: "normal",
        fontSize: 15,
        textAlign: "center"


    },
});