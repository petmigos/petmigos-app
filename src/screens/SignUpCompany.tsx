import React, { useState, useEffect } from 'react';
import Input from '../components/Input';
import { compSignUpStyle } from '../styles/signCompanyStyle';
import { View, Text, ScrollView, Alert, TextInput } from 'react-native';
import Checkbox from 'expo-checkbox';
import Title from '../components/Title';
import BrownButton from '../components/BrownButton';
import SignatureCard from '../components/SignatureCard';
import { Picker } from '@react-native-picker/picker';
import { Address } from '../entities/address';
import { cnpj } from 'cpf-cnpj-validator';
import { CompanySignUpService } from '../services/CadastroCompanyService';
import CreateCompany from '../use_cases/CreateCompany';
import { TopInitScreen } from '../components/TopInitScreen/TopInitScreen';
import { ValidationMessage } from '../components/ValidationMessages/ValidationMessage';
import { useNavigation, StackActions } from '@react-navigation/native';
import PasswordField from '../components/Password/PasswordField';
import PasswordCheckbox from '../components/Password/PasswordCheckbox';

let service = new CompanySignUpService();
let company = new CreateCompany(service);

const SignUpCompany: React.FC = () => {
  const navigation = useNavigation();
  const [currentCNPJ, setCNPJ] = useState("");
  const [cep, setCep] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [isSelected, setSelection] = useState(false);
  const [signature, setSignature] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('Petshop');
  const [showMessageError, setShowMessageError] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [addressNumber, setAddressNumber] = useState<Address | null>(null);
  const [address, setAddress] = useState<Address>({
    cep: "",
    logradouro: "Logradouro",
    complemento: "",
    bairro: "Bairro",
    localidade: "Cidade",
    uf: "Estado",
    unidade: ""
  });

  useEffect(() => {
    async function fetchAddress() {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      setAddress({
        ...address,
        cep: data.cep,
        localidade: data.localidade,
        logradouro: data.logradouro,
        uf: data.uf,
        bairro: data.bairro
      });
    }
    if (cep.length === 8) {
      fetchAddress();
    }
  }, [cep]);

  const handleAdressNumberChange = (text: string) => {
    console.log("number:" +  text);
    setAddress({
      ...address,
      unidade: text,
    });
  };

  const handleAdressComplementChange = (text: string) => {
    setAddress({
      ...address,
      complemento: text,
    });
  };

  const handleOKButton = () =>
    navigation.dispatch(
      StackActions.popToTop()
    );


  async function SendData() {

    try {

      const createdCompany = await company.execute(currentCNPJ, selectedCategory, name, email, [password, confPassword], signature, address)
      setShowMessageError(false);
      Alert.alert('Sucesso!',
        'Voc?? agora ?? oficialmente parte da PetMigos! Entre na sua nova conta e descubra todos os nossos recursos!',
        [
          { text: 'FAZER LOGIN', onPress: handleOKButton }
        ])
    } catch (error: any) {
      setShowMessageError(true);
      setMessageError(error.message);
    }

  }


  return (
    <ScrollView>
      <View style={compSignUpStyle.container}>

        <TopInitScreen title='Cadastro' marginBottom={25} />
        <Input message="CNPJ*"
          changeText={setCNPJ}
          value={cnpj.format(currentCNPJ)}
          marginBtm={20}
          number={true}
          maxLength={18}
        />
        <Input message="Nome Fantasia*" value={name} changeText={setName} />
        <Input message="E-mail*" value={email} changeText={value => setEmail(value)} />

        <Picker
          selectedValue={selectedCategory}
          style={compSignUpStyle.pickCategory}
          onValueChange={(itemValue) => setSelectedCategory(itemValue)}
        >
          <Picker.Item label="Petshop" value="petshop" />
          <Picker.Item label="Veterin??rio" value="veterinario" />
          <Picker.Item label="Outros" value="outros" />
        </Picker>

        <View>
          <Title message={"Endere??o"} fontSize={20} />
          <View style={compSignUpStyle.small_input}>
            <Input message="CEP*" width={211}
              number={true}
              value={cep}
              changeText={setCep} />
            <Input message="Estado" value={address.uf} edit={false} width={120} />
          </View>
          <Input message="Cidade" value={address.localidade} edit={false} />
          <Input message="Logradouro" value={address.logradouro} edit={false} />
          <Input message="Bairro" value={address.bairro} edit={false} />
          <View style={compSignUpStyle.small_input}>
            <Input message="N??mero*" width={110} number={true} changeText={handleAdressNumberChange} />
            <Input message="Complemento" width={206} changeText={handleAdressComplementChange} />
          </View>
          <Title message={"Senha de acesso*"} fontSize={20} />
          <PasswordField message="Digite sua senha" isSelected={isSelected} setPassword={setPassword} />
          <PasswordField message="Confirme sua senha" isSelected={isSelected} setPassword={setConfPassword} />
          <PasswordCheckbox isSelected={isSelected} setSelection={setSelection} />
        </View>

        <View>
          <Title message="Assinatura*" fontSize={20} />
          <SignatureCard
            logo={require('../../assets/signatureSoftLogo.png')}
            title="PetMigo Suave"
            description="Um valor de 4% ?? cobrado em cima do valor de cada uma das transa????es atrav??s do aplicativo."
            onPress={() => setSignature("PetMigo Suave")}
            selected={signature === "PetMigo Suave"}
          />

          <SignatureCard
            logo={require('../../assets/signatureIdealLogo.png')}
            title="PetMigo Ideal"
            description="Um valor de 5% ?? cobrado em cima do valor das transa????es pelo aplicativo, e +2% s??o cobrados para anunciar sua loja em destaque no app. "
            onPress={() => setSignature("PetMigo Ideal")}
            selected={signature === "PetMigo Ideal"}
          />
        </View>
        {showMessageError && <ValidationMessage error_text={messageError} />}
        <BrownButton
          onPress={SendData}
          title="CADASTRAR"
          margin={20} />
      </View>
    </ScrollView>
  )
};

export default SignUpCompany;