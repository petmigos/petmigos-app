import {Text, View, TextInput, Image, StyleSheet, FlatList } from 'react-native';
import React, {useState} from 'react';
import { inputBackground } from '../../styles/colors';
import { SearchBar } from 'react-native-elements';

const StorePage = ({ route }) =>{

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




    return(
        <View style={{marginTop: '15%'}}>
            <View style={styles.header}>
                <Image source={require('../../../assets/store_test.png')} style={styles.icon}/>
                <View style={styles.description}>
                    <Text style={styles.name}>{store.name}</Text>
                    <Text style={styles.category}>{store.category}</Text>
                </View>
            </View>
            <View>
            <TextInput
                placeholder="Pesquisar"
                placeholderTextColor='#BDBCBC'
                onChangeText={handleSearch}
                value={searchText}
                style={styles.searchBar}
            />
            <FlatList
                data={searchText ? filteredData : data }
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Text>{item.name}</Text>}
            />
            </View>
        </View>
    )
}

const styles = StyleSheet.create(
    {
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