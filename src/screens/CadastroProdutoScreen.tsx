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
import { fromByteArray } from 'base64-js';

var cadastroItem = new CadastroItem(new CadastroItemService());

const image = {
    test: require("../../assets/store_test.png"),
    addFoto: require("../../assets/addFoto.png")
}


export default function CadastroProdutoScreen() {
    
    const [valid_format, setValidFormat] = useState("");
    const [original_format, setOriginalFormat] = useState("");
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


    // this function is used for converting the uri got from images to a universal format: base64
    // it is necessary to save them in a database or display on screen

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


    // this function is used to convert the base64 string to a valid format likely to pass through json
    function toUrlSafeBase64(base64String: string): string {
        const bytes = fromByteArray(Buffer.from(base64String, 'base64'));
        return bytes.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
      }
    
    // this function is used to convert the previous format mentioned to a base64 string
    function fromUrlSafeBase64(base64String: string): string {
        const bytes = fromByteArray(Buffer.from(base64String, 'base64'));
        return bytes.replace(/-/g, '+').replace(/_/g, '/');
      }

    // execution order: 1. uriToBase64 (get the image uri and convert to base64) 2. toUrlSafeBase64 (get the base64 string and convert to a valid format 
    // if you want to use json and save it in a database) 3. fromUrlSafeBase64 (get the valid format for json and make it a base64 string again if you
    // want to display the image)
      

    async function SendData() {

        const base64Image = await uriToBase64(result.assets[0].uri);
        const vf = toUrlSafeBase64(await base64Image)
        setValidFormat(vf);
        setOriginalFormat(fromUrlSafeBase64(valid_format));
        console.log(original_format);
    
        await cadastroItem.execute(title, description, price, category, valid_format, quantity)
    }

    function Increment() {
        setQuantity(quantity + 1);
      
    }

    function Decrement() {
        if (quantity > 0) setQuantity(quantity - 1);
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
                <Image source={{ uri: `data:image/png;base64, ${original_format}` }} style={{ width: 100, height: 150}} />
                <TouchableOpacity style={styles.accessingButton} onPress={SendData}>
                    <Text style={styles.gettingText}>
                        Cadastrar
                    </Text>
                </TouchableOpacity>
            </View>

        </View>

    )
}

