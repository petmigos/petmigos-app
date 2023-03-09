import { Image, TouchableOpacity, Text, TextInput, View } from 'react-native';
import styles from '../styles/cadastroProdutoStyles';
import { useState } from 'react';
import CadastroItemService from '../services/CadastroItemService';
import CadastroItem from '../use_cases/RegisterItemUC';
import { SetImage } from '../components/SetImage/SetImage';
import { Picker } from '@react-native-picker/picker';
import { result } from '../components/SetImage/SetImage';
import { QuantButton } from '../components/QuantButton/QuantButton';

var cadastroItem = new CadastroItem(new CadastroItemService());

const image = {
  test: require("../../assets/store_test.png"),
};

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
        
        const source = {
          uri: result.assets[0].uri,
          type:`test/${result.assets[0].uri.split(".")[1]}`,
          name:`test.${result.assets[0].uri.split(".")[1]}`
        }

        cloudinaryUpload(source);
    
        await cadastroItem.execute(title, description, price, category, quantity)
    }

    function Increment() {
        setQuantity(quantity + 1);
      
    }

    function Decrement() {
        if (quantity > 0) setQuantity(quantity - 1);
    }
    
    const cloudinaryUpload = (photo) => {
      const data = new FormData()
      data.append("file", photo)
      data.append("upload_preset", 'lipjy5de')
      data.append("cloud_name", "petmigosimages")
      
      fetch("https://api.cloudinary.com/v1_1/petmigosimages/image/upload", {
        method: "post",
        body: data
      }).then(res => res.json()).
        then(data => {
          console.log(data)
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

        <View style={styles.picker}>
          <Picker
            selectedValue={selectedCategory}
            style={styles.pickCategory}
            onValueChange={(itemValue) => CategoryChange(itemValue)}
          >
            <Picker.Item value="Acessorios" label="Acessórios" />
            <Picker.Item value="BanhoETosa" label="Banho e Tosa" />
            <Picker.Item value="Consultas" label="Consultas" />
            <Picker.Item value="Alimentacao" label="Alimentação" />
            <Picker.Item value="Exames" label="Exames" />
            <Picker.Item value="Adestramento" label="Adestramento" />
          </Picker>
        </View>

        {hasQuantity && (
          <View style={styles.quantity}>
            <Text style={styles.quantityText}>Quantidade</Text>
            <QuantButton
              quantity={quantity}
              increment={Increment}
              decrement={Decrement}
            />
          </View>
        )}
        <TouchableOpacity style={styles.accessingButton} onPress={SendData}>
          <Text style={styles.gettingText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
