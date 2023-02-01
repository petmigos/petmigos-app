import { Text, View } from 'react-native';
import validation_message from './validation_message';

type ErrorProps = {
    error_text: string;
};

export const ValidationMessage = (props: ErrorProps) => {
    return (
        <View style={validation_message.error_box}>
            <Text style={validation_message.error_text}>
                {props.error_text}
            </Text>
        </View>
    );
};