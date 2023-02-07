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

  public async create(company: Company): Promise<any>{
    let reqs = fetch('http://192.168.0.86:3333/company', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              cnpj: company.cnpj,
              name: company.name,
              category: company.category,
              email: company.email,
              password: company.password,
              signature: company.signature
            })
        }).then(resp => console.log("Resposta: " + resp))
            .catch(error => console.log("Erro: " + error))
  }
}
