import { View, Text } from "react-native";
import Checkbox from "expo-checkbox";
import { styles } from "./password_styles";

const PasswordCheckbox = ({isSelected, setSelection}) =>{
    return(
        <View style={styles.check_box_container}>
                    <Checkbox
                        value={isSelected}
                        onValueChange={setSelection}
                        style={styles.checkbox}
                    color={isSelected ? '#915E36' : undefined}
                    />
                    <Text style={styles.label}> Mostrar senha </Text>
                </View>
    )
}

export default PasswordCheckbox;