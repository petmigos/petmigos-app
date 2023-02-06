import { styles } from "./password_styles";
import { TextInput } from "react-native"


const PasswordField = ({setPassword, isSelected, message}) =>{
    
    return(
        <>
        <TextInput style={styles.input_box}
                    placeholder={message}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry={!isSelected}>
                </TextInput>
        </>
    )
}

export default PasswordField;