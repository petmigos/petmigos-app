import { Image, TouchableOpacity, Text, TextInput, View } from 'react-native';
import styles from '../styles/cadastroProdutoStyles';
import { useState } from 'react';
import CadastroItemService from '../services/CadastroItemService';
import CadastroItem from '../use_cases/RegisterItemUC';
import { SetImage } from '../components/SetImage/SetImage';
import { Picker } from '@react-native-picker/picker';
import { result } from '../components/SetImage/SetImage';
import { QuantButton } from '../components/QuantButton/QuantButton';
import { Buffer } from 'buffer';

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

    function uriToBase64(uri: string): Promise<string> {
        return new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.onload = function() {
            const reader = new FileReader();
            reader.onloadend = function() {
              const base64data = reader.result.toString().split(',')[1];
              resolve(base64data);
            };
            reader.onerror = function(error) {
              reject(error);
            };
            reader.readAsDataURL(xhr.response);
          };
          xhr.onerror = function(error) {
            reject(error);
          };
          xhr.responseType = 'blob';
          xhr.open('GET', uri);
          xhr.send();
        });
      }
      

    async function SendData() {
        
        const base64Image = await uriToBase64(result.assets[0].uri);
        console.log(base64Image);
        await cadastroItem.execute(title, description, price, category, base64Image, quantity)

    }

    

    function Increment() {
        setQuantity(quantity + 1);
    }

    function Decrement() {
        if (quantity > 0) setQuantity(quantity - 1);
    }

    function Pressed() {

        console.log(title);
        console.log(description);
        console.log(price);
        console.log(category);
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
                        onValueChange={(itemValue) => setCategory(itemValue)}
                    >
                        <Picker.Item label="Petshop" value="petshop" />
                        <Picker.Item label="Veterinário" value="veterinario" />
                        <Picker.Item label="Outros" value="outros" />
                    </Picker>
                </View>

                <View style={styles.quantity}>
                    <Text style={styles.quantityText}>Quantidade</Text>
                    <QuantButton quantity={quantity} increment={Increment} decrement={Decrement}/>
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

