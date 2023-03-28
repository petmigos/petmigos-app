import {Text, View, TextInput, Image, StyleSheet, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import ItemCard from '../../components/ItemCard/ItemCard';
import React, {useState, useEffect} from 'react';
import { inputBackground } from '../../styles/colors';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Item } from '../../entities/item';
import { FetchAllByCompany } from '../../use_cases/item/FetchAllByCompany';
import ItemService from '../../services/ItemService';

const StorePage = ({ route }) =>{
    const navigation = useNavigation()
    const { store } = route.params;
    const isFocused = useIsFocused();
    const [searchText, setSearchText] = useState('');
    const [items, setData] = useState([]);
    const [filteredItems, setFilteredData] = useState(items);
    const fetchAllByCompany = new FetchAllByCompany(new ItemService());

    useEffect(() => {
        getItems()
      }, []);

    const getItems = () => {
        if(isFocused){
            fetchAllByCompany.execute(store._id).then((data) => {
              setData(data);
              setFilteredData(data)
            });
          }
    }

    const handleSearch = (text: string) => {
        setSearchText(text);

        const filteredData = items.filter((item) => {
            const itemName = item.title.toLowerCase();
            const searchTextLower = text.toLowerCase();
            return itemName.includes(searchTextLower);
        });
        setFilteredData(filteredData)
        };

    function onPressItem(item: any) {
        const storeId = store._id 
        const test = item + storeId
        console.log(test.storeId)
        navigation.navigate("ItemUserScreen", { item, storeId })
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
            {items !== undefined? filteredItems.map(item => (   
                <TouchableOpacity
                    key={item._id || item.title}
                >
                    <ItemCard {...item} onPress={() => onPressItem(item)} image={item.image}/>
                </TouchableOpacity>
            )) : (<Text>NAO TEM ITEM</Text>)
            }

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
            borderRadius: 20,
            
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