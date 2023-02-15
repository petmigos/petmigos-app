import { StyleSheet } from "react-native";
import { inputBackground } from "../../styles/colors";

export const styles = StyleSheet.create({
    input_box: {
        height: 57,
        marginTop: 10,
        borderWidth: 1,
        padding: 10,
        backgroundColor: inputBackground,
        borderRadius: 6,
        opacity: 0.5,
        fontSize: 18,
        borderColor: '#fff',
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