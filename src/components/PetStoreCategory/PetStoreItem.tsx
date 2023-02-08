import { Text, View, Image } from 'react-native';
import style from './petstoreitem';

type ItemProps = {
    image: string;
    title: string;
};

export const PetStoreItem = (props: ItemProps) => {
    return (
        <View style={style.component}>
            <View style={style.button}>
                <Image source={{width: 30, height: 30, uri: props.image}}/>
            </View>
            <Text style={style.text}>{props.title}</Text>
        </View>
    );
};