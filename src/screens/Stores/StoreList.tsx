import { View, Text, StatusBar, SafeAreaView, TouchableOpacity, StyleSheet, Image, FlatList } from "react-native";
import React, {useState, useEffect} from 'react';
import { styles } from "../../styles/storeListStyle";
import { TitleScreenComp } from "../../components/TitleScreen/TitleScreenComp";
import StoreCard from "../../components/StoreCard/StoreCard";
import { useNavigation } from "@react-navigation/native";
import { Company } from "../../entities/company";
import { CompanyService } from "../../services/company/companyService";


const StoreList: React.FC = () => {
    const navigation = useNavigation();
    const [stores, setStores] = useState<Company[]>([]);
    const company = new CompanyService();

    useEffect(() => {
        company.fetchCompanies().then(data => {
          setStores(data);
        });
      }, []);

    function onPressStore(store: Company) {
        navigation.navigate("StorePage", { store })
      }

    function renderStores(store: Company) {
        return (
          <TouchableOpacity onPress={() => onPressStore(store)}>
            <StoreCard key={store._id || store.name} {...store} />
          </TouchableOpacity>
        );
      }

    return(
        <SafeAreaView style={styles.container}>
              <TitleScreenComp title="Lojas"/>
                <View>
                {stores.length > 0 ? (
                  <FlatList
                    data={stores}
                    renderItem={({ item }) => renderStores(item)}
                    keyExtractor={item => item._id}
                  />
                ) : (
                  <View style={styles.warning_container}>
                  <Text style={styles.warning}>Não existem lojas cadastradas</Text>
                  </View>
                )}
                </View>
        
        </SafeAreaView>
    )
}

export default StoreList;