import {View, ScrollView, StyleSheet, Image, TouchableOpacity, Text } from "react-native"
import StoreCard from "../components/StoreCard/StoreCard";
import { useNavigation } from "@react-navigation/native";
import { TitleScreenComp } from "../components/TitleScreen/TitleScreenComp";
import { useEffect, useState } from "react";
import { CompanyService } from "../services/company/CompanyService";

const StoreList = () =>{
    const [companies, setCompanies] = useState([]);
    const navigation = useNavigation();
    const company = new CompanyService();

    useEffect(() => {
        company.fetchCompanies().then(data => {
          setCompanies(data);
        });
      }, []);

    return (
        <>
        <View style={styles.page_title}>
                <TitleScreenComp title="Lojas"/>
            </View>
        <ScrollView style={{height: '100%'}}>
        <View style={styles.store_list}>
            {companies.map(companies => (   
                <TouchableOpacity style={styles.box_container} key={companies._id} onPress={() => console.log(companies.name)}>
                <Image source={require("../../assets/store_test.png")} style={styles.store_img}/>
                    <View style={styles.store_info}>
                        <View>
                            <Text style={styles.store_title}>{companies.name}</Text>
                            <Text style={{color: '#DBA87F'}}>{companies.category}</Text>
                        </View>
                        <View style={styles.store_left_info}>
                            <Image source={require('../../assets/acessorios.png')} style={{marginBottom: 10}}/>
                            <Text style={{color: '#DBA87F'}}>0km</Text>
                        </View>
                    </View>
            </TouchableOpacity>
            ))}
        </View>
        </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    
    page_title: {
        marginBottom: 30
    },

    store_list:{
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    store_title:{
        fontWeight: 'bold',
        fontSize: 20,
    },
    box_container:{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        height: '16%',
        width: '84%',
        margin: 20,
        padding: 8,
        borderRadius: 8,
        alignItems: 'center'
    },
    store_img:{
        width: '18%',
        height: 60,
        borderRadius: 12,
        marginRight: 8
    },
    
    store_info:{
       // backgroundColor: 'red',
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'stretch',
        justifyContent: 'space-between',
    },
    store_left_info:{
        alignItems: 'flex-end',
    }
})



export default StoreList;