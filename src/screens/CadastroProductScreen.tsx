import { Image, TouchableOpacity, Text, TextInput, View } from 'react-native';
import styles from '../styles/styles';
import { useState } from 'react';
import { SelectList } from 'react-native-dropdown-select-list';
import CadastroItemService from '../services/CadastroItemService';
import CadastroItem from '../use_cases/RegisterItemUC';

var cadastroItem = new CadastroItem(new CadastroItemService());

export default function CadastroProductScreen(){

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState("");
    const data = [
        {key: 'Acessórios', value:'Acessórios'},
        {key: 'Banho e Tosa', value:'Banho e Tosa'},
        {key: 'Consultas', value:'Consultas'},
        {key: 'Padrinhos', value:'Padrinhos'},
        {key: 'Alimentação', value:'Alimentação'},
        {key: 'Exames', value:'Exames'},
        {key: 'Adestramento', value:'Adestramento'},
    ]

    async function SendData() {

        await cadastroItem.execute(title, description, price, category);

    }

    function Pressed(){

        console.log(title);
        console.log(description);
        console.log(price);
        console.log(category);
    }

    return (
        <View style={styles.container}>
            <Text>
                {'\n\n\n\n\n\n\n\n\n\n'}
            </Text>

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

            <SelectList data={data} setSelected={setCategory}/>

            <TouchableOpacity style={styles.acessing_button} onPress={SendData}>
                    <Text style={styles.getin_text}>
                        Cadastrar
                    </Text>
            </TouchableOpacity>

        </View>
    
    )
}