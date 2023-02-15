import { Text, View} from 'react-native';
import { StyleSheet } from "react-native";

type TitleProps = {
    title: string;
};

export const TitleScreenComp = ({title}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.header_text}>{title}</Text>
        </View>
    );
};


const styles = StyleSheet.create({

    header: {
        display: 'flex',
        marginTop: '16%',
        marginLeft: '8%',
        //fontFamily: 'Ubuntu'
    },
    header_text: {
        fontSize: 40,
        fontWeight: 'bold'
    },
});