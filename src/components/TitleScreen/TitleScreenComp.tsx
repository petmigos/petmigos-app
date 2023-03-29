import { Text, View} from 'react-native';
import { StyleSheet } from "react-native";

type TitleProps = {
    title: string;
};

export const TitleScreenComp = (props: TitleProps) => {
    return (
        <View style={styles.header}>
            <Text style={styles.header_text}>{props.title}</Text>
        </View>
    );
};


const styles = StyleSheet.create({

    header: {
        marginTop: 10,
        display: 'flex',
        marginLeft: '8%',
        //fontFamily: 'Ubuntu'
    },
    header_text: {
        fontSize: 30,
        fontWeight: 'bold'
    },
});