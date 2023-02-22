import { View } from 'react-native';
import { erro, primary, superficie } from '../../styles/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';


export const Line = () => {
    return (
        <View 
            style={{
                flex: 0.02,
                backgroundColor: superficie,
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'center',
                marginTop: 5,
                marginBottom: 10,
                marginLeft: 5,
                width: 350,
                borderRadius: 5,
        }}
        />
    );
};