import React, { useState, useEffect } from 'react';
import Input  from '../components/Input';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Title from '../components/Title';
import { cnpj } from 'cpf-cnpj-validator';
import BrownButton from '../components/BrownButton';
import SignatureCard from '../components/SignatureCard';
import { background } from './styles/colors';

interface Address{
      cep
      logradouro
      complemento
      bairro
      localidade
      uf
      unidade
      ibge
      gia
}

const SignUpCompany: React.FC = () => {
    const [currentCNPJ, setCNPJ] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const [cep, setCep] = useState("");
    const [softSignature, setSoftSignature] = useState(false);
    const [idealSignature, setIdealSignature] = useState(false);
    const [address, setAddress] = useState<Address>({
      cep: "",
      logradouro: "Logradouro",
      complemento: " ",
      bairro: "Bairro",
      localidade: "Cidade",
      uf: " ",
      unidade: " ",
      ibge: " ",
      gia: " "
});
  
    useEffect(() => {
      async function fetchAddress() {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        setAddress(data);
      }
      if (cep.length === 8) {
        fetchAddress();
      }
    }, [cep]);


    const handleCNPJChange = (text) => {
        setCNPJ(text);
        if (cnpj.isValid(text)) {
            setErrorMessage(null);
          } else {
            setErrorMessage('CPNJ Inválido!');
          }
      };

    const  handleAdressChange = (text, adressPart: Address) => {
        setAddress(adressPart)
        console.log(adressPart)
      }

  return (
      <ScrollView>
        <View style={styles.container}>
            <Image source={require('../../assets/logo.png')} style={styles.img}/>
            <Title message={"Cadastro"} fontSize={40}></Title>
            <Input message="CNPJ*" 
            changeText={handleCNPJChange}
            value={cnpj.format(currentCNPJ)} 
            marginBtm={20}
            number={true} 
            />
            {errorMessage && <Text style={styles.errorMsg}> CNPJ inválido! </Text>}
            <Input message="Nome Fantasia"/>
            <Input message="E-mail"/>
            <Input message="Categoria de Serviço (drop)"/>
            <View style={styles.containerAdress}>
            <Title message={"Endereço"} fontSize={20}/>
            <Input message="Estado (drop)"/>
            <Input message="CEP" width={229} 
            number={true}
            value={cep}
            changeText={setCep}/>
            <Input message="Cidade" value={address.localidade} edit={false}/>
            <Input message="Logradouro" value={address.logradouro} edit={false}/>
            <Input message="Número" width={110} number={true}/>
            <Input message="Complemento" width={206} marginLeft={23}/>
            <Title message={"Senha de acesso"} fontSize={20}/>
            <Input message="Digite sua senha"/>
            <Input message="Confirme sua senha"/>
            </View>
            <View>
              <Title message="Assinatura" fontSize={20}/>
              <SignatureCard
              logo={require('../../assets/signatureSoftLogo.png')}
              title="PetMigo Suave"
              description="Um valor de 4% é cobrado em cima do valor de cada uma das transações através do aplicativo."
              selected={softSignature}
            setSelected={setSoftSignature}
              />

            <SignatureCard
              logo={require('../../assets/signatureIdealLogo.png')}
              title="PetMigo Ideal"
              description="Um valor de 5% é cobrado em cima do valor das transações pelo aplicativo, e +2% são cobrados para anunciar sua loja em destaque no app. "
              selected={idealSignature}
              setSelected={setIdealSignature}
            />
            </View>
            <BrownButton onPress={() => console.log("Funfou")} 
            title="CADASTRAR"
            margin={40}/>
        </View>
      </ScrollView>
  )};

const styles = StyleSheet.create({
    img_container:{
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100%'
    },
    load: {
        width: 80,
        height: 80
    },

    container:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: background
    },
    img:{
        width: 112,
        height: 94,
        margin: 10
    },
    containerAdress:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    errorMsg:{
        color: '#FF0000',
        marginTop: -20,
        marginBottom: 15
    },
})

export default SignUpCompany;