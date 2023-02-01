import React, { useState, useEffect } from 'react';
import Input  from '../components/Input';
import { compSignUpStyle } from '../styles/signCompanyStyle';
import { View, Text, Image, ScrollView } from 'react-native';
import Title from '../components/Title';
import { cnpj } from 'cpf-cnpj-validator';
import BrownButton from '../components/BrownButton';
import SignatureCard from '../components/SignatureCard';
import { Picker } from '@react-native-picker/picker';

interface Address{
      cep: string;
      logradouro: string;
      complemento: string;
      bairro: string;
      localidade: string;
      uf: string;
      unidade: string;
      ibge: string;
      gia: string;
}

const SignUpCompany: React.FC = () => {
    const [currentCNPJ, setCNPJ] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const [cep, setCep] = useState("");
    const [softSignature, setSoftSignature] = useState(false);
    const [idealSignature, setIdealSignature] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('java');
    const [address, setAddress] = useState<Address>({
      cep: "",
      logradouro: "Logradouro",
      complemento: " ",
      bairro: "Bairro",
      localidade: "Cidade",
      uf: "Estado",
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

  return (
      <ScrollView>
        <View style={compSignUpStyle.container}>
            <Image source={require('../../assets/logo.png')} style={compSignUpStyle.img}/>
            <Title message={"Cadastro"} fontSize={40}></Title>
            <Input message="CNPJ*" 
            changeText={handleCNPJChange}
            value={cnpj.format(currentCNPJ)} 
            marginBtm={20}
            number={true} 
            />
            {errorMessage && <Text style={compSignUpStyle.errorMsg}> CNPJ inválido! </Text>}
            <Picker
              selectedValue={selectedCategory}
              style={compSignUpStyle.pickCategory}
              onValueChange={(itemValue, itemIndex) => setSelectedCategory(itemValue)}
            >
              <Picker.Item label="Petshop" value="petshop"/>
              <Picker.Item label="Veterinário" value="veterinario" />
              <Picker.Item label="Outros" value="outros" />
            </Picker>
            <Input message="Nome Fantasia"/>
            <Input message="E-mail"/>
            
            <View style={compSignUpStyle.containerAdress}>
            <Title message={"Endereço"} fontSize={20}/>
            <Input message="Estado"/>
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
              margin={40}
            />
        </View>
      </ScrollView>
  )};

export default SignUpCompany;