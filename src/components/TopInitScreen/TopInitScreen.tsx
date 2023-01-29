import { Text, View } from 'react-native';
import Logo from "../../../assets/logo.svg";
import top_init_screen from './top_init_screen';

type TitleProps = {
    title: string;
};

export const TopInitScreen = (props: TitleProps) => {
    return (
        <View style={top_init_screen.top_init_screen}>
            <Logo style={top_init_screen.logo_img} />
            <Text style={top_init_screen.titleText}>
                {props.title}
            </Text>
        </View>
    );
};