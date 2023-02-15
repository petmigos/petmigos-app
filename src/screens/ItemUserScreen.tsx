import { Image, TouchableOpacity, Text, TextInput, View, StyleSheet } from 'react-native';
import { useState } from 'react';
import CadastroItemService from '../services/CadastroItemService';
import CadastroItem from '../use_cases/RegisterItemUC';
import { SetImage } from '../components/SetImage/SetImage';
import { Picker } from '@react-native-picker/picker';
import { QuantButton } from '../components/QuantButton/QuantButton';
import * as ImagePicker from 'expo-image-picker';
import { background, erro, primary } from '../styles/colors';
import { superficie } from '../styles/colors';

var cadastroItem = new CadastroItem(new CadastroItemService());

const image = {
    image: require("../../assets/store_test.png"),
}


export default function CadastroProdutoScreen() {

    const [title, setTitle] = useState("Teste");
    const [description, setDescription] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque congue nibh vel erat ullamcorper tempor. Donec interdum nisl diam, quis mollis tellus finibus eget. Fusce at venenatis justo. Fusce convallis maximus venenatis. Praesent augue nisi, congue at vehicula eu, maximus id enim. Nulla mollis rutrum risus, sed vestibulum est porta eget. Quisque commodo quis lectus et maximus. In mi lorem, porttitor quis risus nec, convallis sagittis dolor.");
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [image, setImage] = useState("../../../assets/user_icon.png");

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        console.log(typeof (result));

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const uploadImage = () => {

        console.log(typeof (image))
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.imageButton} onPress={() => { pickImage(); uploadImage() }}>
                <Image source={{uri: image}}
                    style={styles.image}/>
            </TouchableOpacity>
            <View style={styles.info}>
                <Text style={styles.tituloItem}>{title}</Text>
                <Text style={styles.informacoes}>Informações</Text>
                <Text style={styles.preco}>R$ {price}</Text>
                <Text style={styles.descricao}>{description}</Text>
            </View>
            <View style={styles.buyButtons}>
                <TouchableOpacity style={styles.accessingButton}>
                    <Text style={styles.gettingText}>
                        Comprar
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.accessingButton}>
                    <Text style={styles.gettingText}>
                        Adicionar ao Carrinho
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );

};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: background,
    },

    imageButton: {
        flex: 2,
        backgroundColor: superficie,
        justifyContent: 'center',
        alignItems: 'center',
    }, 

    image: {
        height: 300,
        width: 300,
        resizeMode: 'contain',
    },

    info: {
        flex: 3,
        backgroundColor: background,
        marginLeft: 20,
        marginRight: 20,
    },

    tituloItem: {
        marginTop: 30,
        marginLeft: 10,
        fontSize: 25,
        fontWeight: 'bold',
    },

    informacoes: {
        marginTop: 30,
        fontSize: 20,
        fontWeight: 'bold',
    },

    preco: {
        fontSize: 40,
        fontWeight: 'bold',
    },

    descricao: {
        textAlign: 'justify',
    },

    buyButtons: {
        flex: 2,
        marginRight: 20,
        marginLeft: 20,
    },  

    accessingButton: {
        backgroundColor: '#915E36',
        height: 56,
        // fontFamily: 'Ubuntu-Bold',
        fontStyle: 'normal',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 20,
        borderRadius: 8,
        resizeMode: 'contain',

    },

    gettingText: {
        fontSize: 18,
        fontWeight: "bold",
        top: 15,
        color: '#FFFFFF'
    },

});