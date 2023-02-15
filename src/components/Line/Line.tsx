import { View } from 'react-native';
import { superficie } from '../../styles/colors';


export const Line = () => {
    return (
        <View 
            style={{
                flex: 0.02,
                backgroundColor: superficie,
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'center',
                marginTop: 25,
                marginBottom: 10,
                marginLeft: 5,
                width: 350,
                borderRadius: 5,
        }}
        />
    );
};