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
    test: require("../../assets/store_test.png"),
    addFoto: require("../../assets/addFoto.png")
}


export default function CadastroProdutoScreen() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState("");
    const [selectedCategory, setSelectedCategory] = useState('Petshop');
    const [quantity, setQuantity] = useState(0);
    const data = [
        { key: 'Acessórios', value: 'Acessórios' },
        { key: 'Banho e Tosa', value: 'Banho e Tosa' },
        { key: 'Consultas', value: 'Consultas' },
        { key: 'Padrinhos', value: 'Padrinhos' },
        { key: 'Alimentação', value: 'Alimentação' },
        { key: 'Exames', value: 'Exames' },
        { key: 'Adestramento', value: 'Adestramento' },
    ];

    async function SendData() {

        await cadastroItem.execute(title, description, price, category);

    }

    function Increment() {
        setQuantity(quantity + 1);
    }

    function Decrement() {
        if (quantity >= 0) setQuantity(quantity - 1);
    }

    function Pressed() {

        console.log(title);
        console.log(description);
        console.log(price);
        console.log(category);
    }

    function convertToBase64(file){
        return new Promise((resolve, reject) =>{
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result)
            }
            fileReader.onerror = (error) => {
                reject(error)
            }
        })
    }

    return (
        <View style={styles.container}>

            <View style={styles.topContainer}>
                <Text style={styles.topText}>Cadastrar Produto</Text>
                <SetImage image={image.test} addImage={image.addFoto} />
            </View>
            
            <View style={styles.middleScreen}>
                <TextInput style={styles.input_box}
                    placeholder='Título'
                    onChangeText={(text) => setTitle(text)}>
                </TextInput>

                <TextInput style={styles.input_box}
                    placeholder='Descrição'
                    onChangeText={(text) => setDescription(text)}>
                </TextInput>

                <TextInput style={styles.input_box}
                    placeholder='Preço'
                    onChangeText={(text) => setPrice(Number(text))}>
                </TextInput>

                <View style={styles.picker}>
                    <Picker
                        selectedValue={selectedCategory}
                        style={styles.pickCategory}
                        onValueChange={(itemValue) => setSelectedCategory(itemValue)}
                    >
                        <Picker.Item label="Petshop" value="petshop" />
                        <Picker.Item label="Veterinário" value="veterinario" />
                        <Picker.Item label="Outros" value="outros" />
                    </Picker>
                </View>

                <View style={styles.quantity}>
                    <Text style={styles.quantityText}>Quantidade</Text>
                    <QuantButton quantity={0} />
                </View>


                <TouchableOpacity style={styles.accessingButton} onPress={SendData}>
                    <Text style={styles.gettingText}>
                        Cadastrar
                    </Text>
                </TouchableOpacity>

            </View>

        </View>

    )
}