import React, { useState, useEffect } from 'react';
import Input  from '../components/Input';
import { compSignUpStyle } from '../styles/signCompanyStyle';
import { View, Text, Image, ScrollView, Alert } from 'react-native';
import Title from '../components/Title';
import { cnpj } from 'cpf-cnpj-validator';
import BrownButton from '../components/BrownButton';
import SignatureCard from '../components/SignatureCard';
import { Picker } from '@react-native-picker/picker';
import { Address } from '../services/CompanyService';
import { TopInitScreen } from '../components/TopInitScreen/TopInitScreen';

const verifyEmail = (email:string) =>{
  const emailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(emailValidation.test(email) || email.length === 0){
    return false;
  }
  return true;
}

const SignUpCompany: React.FC = () => {
    const [currentCNPJ, setCNPJ] = useState("");
    const [cep, setCep] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);
    const [signature, setSignature] = useState<string | null>(null);
    const [selectedCategory, setSelectedCategory] = useState('Petshop');
    const [addressNumber, setAddressNumber] = useState<Address | null>(null);
    const [address, setAddress] = useState<Address>({
      cep: "",
      logradouro: "Logradouro",
      complemento: " ",
      bairro: "Bairro",
      localidade: "Cidade",
      uf: "Estado",
      unidade: " "
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
        if (cnpj.isValid(text) || text.length === 0) {
            setErrorMessage(null);
          } else {
            setErrorMessage('CNPJ Inválido!');
          }
      };
    
    const handleAdressNumberChange = (text: string) => {
        setAddress({
          ...address,
          unidade: text,
        });
      };

      const handleSignUp = () => {
        if (!email || !cnpj || !password || !name || !address || !signature) {
          Alert.alert('Calma aí!', 
          'Verifique se preencheu todas as informações antes de clicar em cadastrar.');
        }
        else if(errorMessage){
          Alert.alert('Ops!', 
          'O CNPJ que você digitou não é válido, por favor verifique novamente.');
        }
      }

  return (
      <ScrollView>
        <View style={compSignUpStyle.container}>
           
            <TopInitScreen title='Cadastro' marginBottom={25}/>
            <Input message="CNPJ*" 
            changeText={handleCNPJChange}
            value={cnpj.format(currentCNPJ)} 
            marginBtm={20}
            number={true} 
            maxLength={18}
            />
             {errorMessage && <Text style={compSignUpStyle.errorMsg}> CNPJ inválido! </Text>}
            <Input message="Nome Fantasia" value={name} changeText={setName}/>
            <Input message="E-mail" value={email} changeText={value => setEmail(value)}/>
            {verifyEmail(email) && <Text style={compSignUpStyle.errorMsg}> E-mail inválido! </Text>}
            <Picker
              selectedValue={selectedCategory}
              style={compSignUpStyle.pickCategory}
              onValueChange={(itemValue) => setSelectedCategory(itemValue)}
            >
              <Picker.Item label="Petshop" value="petshop"/>
              <Picker.Item label="Veterinário" value="veterinario" />
              <Picker.Item label="Outros" value="outros" />
            </Picker>
           
            <View>
              <Title message={"Endereço"} fontSize={20}/>
              <View style={compSignUpStyle.small_input}>
                <Input message="CEP" width={211} 
                  number={true}
                  value={cep}
                  changeText={setCep}/>
                <Input message="Estado" value={address.uf}  edit={false} width={120}/>
            </View>
            <Input message="Cidade" value={address.localidade} edit={false}/>
            <Input message="Logradouro" value={address.logradouro} edit={false}/>
            <Input message="Bairro" value={address.bairro} edit={false}/>
            <View style={compSignUpStyle.small_input}>
              <Input message="Número" width={110} number={true} changeText={handleAdressNumberChange}/>
              <Input message="Complemento" width={206}/>
            </View>
              <Title message={"Senha de acesso"} fontSize={20}/>
              <Input message="Digite sua nova senha" value={password} changeText={setPassword}/>
            </View>
            
            
            <View>
            <Title message="Assinatura" fontSize={20}/>
              <SignatureCard
                logo={require('../../assets/signatureSoftLogo.png')}
                title="PetMigo Suave"
                description="Um valor de 4% é cobrado em cima do valor de cada uma das transações através do aplicativo."
                onPress={() => setSignature("PetMigo Suave")}
                selected={signature === "PetMigo Suave"}
              />

              <SignatureCard
                logo={require('../../assets/signatureIdealLogo.png')}
                title="PetMigo Ideal"
                description="Um valor de 5% é cobrado em cima do valor das transações pelo aplicativo, e +2% são cobrados para anunciar sua loja em destaque no app. "
                onPress={() => setSignature("PetMigo Ideal")}
                selected={signature === "PetMigo Ideal"}
              />
            </View>
            <BrownButton onPress={handleSignUp} 
              title="CADASTRAR"
              margin={40}
            />
        </View>
      </ScrollView>
  )};

export default SignUpCompany;