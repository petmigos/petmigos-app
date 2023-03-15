import { View } from 'react-native';
import { erro, primary, superficie } from '../../styles/colors';


export const Line = () => {
    return (
        <View 
            style={{
                backgroundColor: superficie,
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'center',
                marginTop: 10,
                marginBottom: 10,
                marginLeft: 22,
                marginRight: 22,
                height: 3,
                borderRadius: 5,
        }}
        />
    );
};