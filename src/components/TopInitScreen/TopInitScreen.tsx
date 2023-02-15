import { Text, View } from 'react-native';
import { Float } from 'react-native/Libraries/Types/CodegenTypes';
import Logo from "../../../assets/logo.svg";
import { StyleSheet } from "react-native";

type TitleProps = {
    title: string;
    marginBottom?: Float
};

export const TopInitScreen = (props: TitleProps) => {
    return (
        <View style={styles.top_init_screen}>
            <Logo style={styles.logo_img} />
            <Text style={[styles.titleText, {marginBottom: props.marginBottom}]}>
                {props.title}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    logo_img: {
        marginTop: 100,
        marginBottom: 10,
    },

    top_init_screen: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    titleText: {
        color: '#000000',
        // fontFamily: 'Ubuntu-Bold',
        fontWeight: "bold",
        fontSize: 48,

    },
});