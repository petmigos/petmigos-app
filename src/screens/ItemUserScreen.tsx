import { Image, TouchableOpacity, Text, TextInput, View } from 'react-native';
import styles from '../styles/cadastroProdutoStyles';
import { useState } from 'react';
import CadastroItemService from '../services/CadastroItemService';
import CadastroItem from '../use_cases/RegisterItemUC';
import { SetImage } from '../components/SetImage/SetImage';
import { Picker } from '@react-native-picker/picker';
import { QuantButton } from '../components/QuantButton/QuantButton';

var cadastroItem = new CadastroItem(new CadastroItemService());

const image = {
    image: require("../../assets/store_test.png"),
}


export default function CadastroProdutoScreen() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState("");
    const [quantity, setQuantity] = useState(0);

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.container}>
                <Image source={}/>
            </TouchableOpacity>


        </View>
    );

};