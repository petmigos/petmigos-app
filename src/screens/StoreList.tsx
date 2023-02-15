import {View, ScrollView, StyleSheet, Image, TouchableOpacity, Text } from "react-native"
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
        <View>
        <View style={styles.page_title}>
                <TitleScreenComp title="Lojas"/>
            </View>
        <ScrollView>
        <View style={styles.store_list}>
            {companies.map(company => (   
                <TouchableOpacity style={styles.box_container} key={company._id} 
                onPress={() => navigation.navigate('StoreScreen', { company })}>
                <Image source={require("../../assets/store/store_test.png")} style={styles.store_img}/>
                    <View style={styles.store_info}>
                        <View>
                            <Text style={styles.store_title}>{company.name}</Text>
                            <Text style={{color: '#DBA87F'}}>{company.category}</Text>
                        </View>
                        <View style={styles.store_left_info}>
                            <Image source={require('../../assets/store/acessorios.png')} style={{marginBottom: 10}}/>
                            <Text style={{color: '#DBA87F'}}>0km</Text>
                        </View>
                    </View>
            </TouchableOpacity>
            ))}
        </View>
        </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    
    page_title: {
        marginBottom: 25
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
        height: 84,
        width: 330,
        margin: 16,
        padding: 10,
        borderRadius: 8,
        alignItems: 'center'
    },
    store_img:{
        width: 50,
        height: 50,
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