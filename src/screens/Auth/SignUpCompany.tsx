import React, { useState, useEffect } from 'react';
import Input from '../../components/Input';
import { compSignUpStyle } from '../../styles/signCompanyStyle';
import { View, Text, ScrollView, Alert } from 'react-native';
import Title from '../../components/Title';
import BrownButton from '../../components/BrownButton';
import SignatureCard from '../../components/SignatureCard';
import { Picker } from '@react-native-picker/picker';
import { Address } from '../../entities/address';
import { cnpj } from 'cpf-cnpj-validator';
import { CompanyService } from '../../services/company/companyService';
import CreateCompany from '../../use_cases/CreateCompany';
import { TopInitScreen } from '../../components/TopInitScreen/TopInitScreen';
import { ValidationMessage } from '../../components/ValidationMessages/ValidationMessage';
import { useNavigation, StackActions } from '@react-navigation/native';
import PasswordField from '../../components/Password/PasswordField';
import PasswordCheckbox from '../../components/Password/PasswordCheckbox';
import { uploadImg } from '../../services/imageService';
import { SetImage, result } from '../../components/PetStoreComponents/SetImage/SetImage';

let service = new CompanyService();
let company = new CreateCompany(service);

let image;
let image_upl;
let source;

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
  const [selectedCategory, setSelectedCategory] = useState("Petshop");
  const [showMessageError, setShowMessageError] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [addressNumber, setAddressNumber] = useState<Address | null>(null);
  const [key, setKey] = useState(null)
  const [address, setAddress] = useState<Address>({
    cep: "",
    logradouro: "Logradouro",
    complemento: "",
    bairro: "Bairro",
    localidade: "Cidade",
    uf: "Estado",
    unidade: "",
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
        bairro: data.bairro,
      });
    }
    if (cep.length === 8) {
      fetchAddress();
    }
  }, [cep]);

  const handleAdressNumberChange = (text: string) => {
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

  const handleOKButton = () => navigation.dispatch(StackActions.popToTop());

  async function SendData() {
    try {
      setShowMessageError(false)
      if(result.assets == null){
        throw new Error("Escolha uma foto de perfil")
      }
      else{
      source = {
        uri: result.assets[0].uri,
        type: `test/${result.assets[0].uri.split(".")[1]}`,
        name: `test.${result.assets[0].uri.split(".")[1]}`,
      };
      
      image_upl = await uploadImg(source);
      if(image_upl !== undefined) image = image_upl.toString();
      console.log("img: " + image)

      const createdCompany = await company.execute({currentCNPJ, selectedCategory, name, email, password, confPassword, signature, address, image, key})
      setShowMessageError(false);
      Alert.alert(
        "Sucesso!",
        "Você agora é oficialmente parte da PetMigos! Entre na sua nova conta e descubra todos os nossos recursos!",
        [{ text: "FAZER LOGIN", onPress: handleOKButton }]
      );
      }
    } catch (error: any) {
      setShowMessageError(true);
      setMessageError(error.message);
    }
  }

  return (
    <ScrollView contentContainerStyle={{ paddingTop: 20, paddingBottom: 20 }}>
      <View style={compSignUpStyle.container}>

        <View style={compSignUpStyle.topContainer}>
              <TopInitScreen title='Cadastro'/>
              <SetImage image="../../assets/user_icon.png" />
        </View>
      
        <Input message="CNPJ*"
          changeText={setCNPJ}
          value={cnpj.format(currentCNPJ)}
          marginBtm={20}
          number={true}
          maxLength={18}
        />
        <Input message="Nome Fantasia*" value={name} changeText={setName} />
        <Input
          message="E-mail*"
          value={email}
          changeText={(value) => setEmail(value)}
        />

        <Picker
          selectedValue={selectedCategory}
          style={compSignUpStyle.pickCategory}
          onValueChange={(itemValue) => setSelectedCategory(itemValue)}
        >
          <Picker.Item label="Petshop" value="Petshop" />
          <Picker.Item label="Veterinário" value="Veterinario" />
          <Picker.Item label="Outros" value="Outros" />
        </Picker>

        <View>
          <Title message={"Endereço"} fontSize={20} />
          <View style={compSignUpStyle.small_input}>
            <Input
              message="CEP*"
              width={211}
              number={true}
              value={cep}
              changeText={setCep}
            />
            <Input
              message="Estado"
              value={address.uf}
              edit={false}
              width={120}
            />
          </View>
          <Input message="Cidade" value={address.localidade} edit={false} />
          <Input message="Logradouro" value={address.logradouro} edit={false} />
          <Input message="Bairro" value={address.bairro} edit={false} />
          <View style={compSignUpStyle.small_input}>
            <Input
              message="Número*"
              width={110}
              number={true}
              changeText={handleAdressNumberChange}
            />
            <Input
              message="Complemento"
              width={206}
              changeText={handleAdressComplementChange}
            />
          </View>
          <Title message={"Senha de acesso*"} fontSize={20} />
          <PasswordField
            message="Digite sua senha"
            isSelected={isSelected}
            setPassword={setPassword}
          />
          <PasswordField
            message="Confirme sua senha"
            isSelected={isSelected}
            setPassword={setConfPassword}
          />
          <PasswordCheckbox
            isSelected={isSelected}
            setSelection={setSelection}
          />
        </View>

        <View>
          <Title message="Assinatura*" fontSize={20} />
          <SignatureCard
            logo={require("../../../assets/signatureSoftLogo.png")}
            title="PetMigo Suave"
            description="Um valor de 3,5% é cobrado em cima do valor de cada uma das compras feitas através do app."
            onPress={() => setSignature("PetMigo Suave")}
            selected={signature === "PetMigo Suave"}
          />
        </View>
        <View>
        <Title message="Chave no mercado pago *" fontSize={20}/>
        <Input 
          message='Chave'
          value={key}
          changeText={setKey}
          />
      </View>
        {showMessageError && <ValidationMessage error_text={messageError} />}
        <BrownButton onPress={SendData} title="CADASTRAR" margin={20} />

      </View>
     
    </ScrollView>
  );
};

export default SignUpCompany;
