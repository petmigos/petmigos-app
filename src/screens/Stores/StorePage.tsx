import {Text, View, TextInput, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ItemCard from '../../components/ItemCard/ItemCard';
import React, {useState} from 'react';
import { inputBackground } from '../../styles/colors';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const StorePage = ({ route }) =>{
    const navigation = useNavigation()
    const { store } = route.params;
    const [searchText, setSearchText] = useState('');
    const [data, setData] = useState([
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' },
    { id: '4', name: 'Another item' },
    { id: '5', name: 'Yet another item' },
    ]);
    const [filteredData, setFilteredData] = useState(data);

    const handleSearch = (text: string) => {
        setSearchText(text);

        const filteredData = data.filter((item) => {
            const itemName = item.name.toLowerCase();
            const searchTextLower = text.toLowerCase();
            return itemName.includes(searchTextLower);
        });
        setFilteredData(filteredData)
        console.log(filteredData)
        };

    function onPressItem(item: Item) {
            navigation.navigate("ItemUserScreen", { item })
    }

    function renderProducts(item: Item) {
            return (
              <TouchableOpacity onPress={() => onPressItem(item)}>
                <ItemCard key={item._id || item.name} {...item} />
              </TouchableOpacity>
            );
    }

    return(
        <SafeAreaView style={{marginTop: '5%'}}>
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
            <FlatList
                data={searchText ? filteredData : data }
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Text>{item.name}</Text>}
            />



            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create(
    {
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