import axios from 'axios';
import { erro } from '../styles/colors';

export interface Address{
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    unidade: string;
}

export class Company{
  public cnpj: string;
  public category: string;
  public name: string;
  public email: string;
  public adress: Address;
  public password: string;
  public signature: string;

  constructor(cnpj: string, category:string, name:string, email: string, password: string, signature: string) {
    this.cnpj = cnpj;
    this.name = name;
    this.email = email;
    this.category = category;
    //this.adress = adress;
    this.password = password;
    this.signature = signature;
  }
}

export class CompanySignUpService {
  private company: Company;
  
  /*public async create(company: Company): Promise<any> {
    try {
      const response = await axios.post(`'https://localhost:3333/company`, {
        cnpj: String(company.cnpj),
        name: company.name,
        category: company.category,
        email: company.email,
        password: company.password,
        signature: company.signature
      });
      return response.data;
    } catch (error) {
      console.error(JSON.stringify(error));
      return error;
    }
  }*/

  public async create(company: Company): Promise<any>{
    axios.post('https://localhost:3333/company')
      .catch(function (error) {
        console.log({...error})
      });
  }
}
