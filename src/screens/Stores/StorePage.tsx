import {Text, View, TextInput, Image, StyleSheet, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import ItemCard from '../../components/Cards/ItemCard/ItemCard';
import React, {useState} from 'react';
import { inputBackground } from '../../styles/colors';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Item } from '../../entities/item';

const StorePage = ({ route }) =>{
    const navigation = useNavigation()
    const { store } = route.params;
    const [searchText, setSearchText] = useState('');
    const [items, setData] = useState([
    { id: '1', title: 'Coleira', price: '45.99' },
    { id: '2', title: 'Ração Pedigree 2kg', price: '89.00' },
    { id: '3', title: 'Caminha de gato', price: '276.99' },
    { id: '4', title: 'Ração 10kg', price: '132.50' },
    { id: '5', title: 'Arranhador p/ gato', price: '341.00' },
    ]);
    const [filteredItems, setFilteredData] = useState(items);

    const handleSearch = (text: string) => {
        setSearchText(text);

        const filteredData = items.filter((item) => {
            const itemName = item.title.toLowerCase();
            const searchTextLower = text.toLowerCase();
            return itemName.includes(searchTextLower);
        });
        setFilteredData(filteredData)
        console.log(filteredData)
        };

    function onPressItem(item: any) {
        navigation.navigate("ItemUserScreen", { item })
    }

    function renderProducts(item: any) {
            return (
              <TouchableOpacity onPress={() => onPressItem(item)}>
                <ItemCard key={item._id || item.title} {...item}/>
              </TouchableOpacity>
            );
    }

    return(
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../../assets/store_test.png')} style={styles.icon}/>
                <View style={styles.description}>
                    <Text style={styles.name}>{store.name}</Text>
                    <Text style={styles.category}>{store.category}</Text>
                </View>
            </View>
            <TextInput
                placeholder="Pesquisar"
                placeholderTextColor='#BDBCBC'
                onChangeText={handleSearch}
                value={searchText}
                style={styles.searchBar}
            />
            <View style={styles.list}>
            {filteredItems.map(item => (   
                <TouchableOpacity
                    key={item.id || item.title}
                >
                    <ItemCard {...item} onPress={() => onPressItem(item)}/>
                </TouchableOpacity>
            ))}

            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create(
    {
        container:{
            marginTop: StatusBar.currentHeight + 12 || 0, 
            marginBottom: 50
        },
        list:{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            flexWrap: 'wrap',
            
        },
        header:{
            display: 'flex',
            flexDirection: 'row',
            marginLeft: 20,
            alignItems: 'center'
        },
        icon:{
            width: 90,
            height: 90,
            borderRadius: 20
        },
        description:{
            marginLeft: 10,
        },

        name:{
            fontWeight: 'bold',
            fontSize: 24
        },
        category:{
            color: "#DBA87F"
        },
        searchBar:{
            padding: 8,
            borderRadius: 8,
            margin: 20,
            fontSize: 18,
            borderColor: '#fff',
            color: "#BDBCBC",
            backgroundColor: inputBackground,
        }
    }
)

export default StorePage;