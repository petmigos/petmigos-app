import axios from 'axios';

export interface Address{
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    unidade: string;
}

export class CompanyService {
  private cnpj: string;
  private category: string;
  private name: string;
  private email: string;
  private adress: Address;
  private password: string;
  private signature: string;
  
  constructor(cnpj: string, category:string, name:string, email: string, adress: Address, password: string, signature: string) {
    this.cnpj = cnpj;
    this.name = name;
    this.email = email;
    this.category = category;
    this.adress = adress;
    this.password = password;
    this.signature = signature;
  }
  
  public async signUp(): Promise<any> {
    try {
      const response = await axios.post(`https://[localhost]/register`, {
        cnpj: this.cnpj,
        name: this.name,
        category: this.category,
        email: this.email,
        adress: this.adress,
        password: this.password,
        signature: this.signature
      });
      return response.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  public async fetchAddress(cep:string) {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();
    return data;
}
}
