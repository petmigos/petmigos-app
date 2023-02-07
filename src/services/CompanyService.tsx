import axios from 'axios';
import { Address } from '../entities/address';

export class Company{
  public cnpj: string;
  public category: string;
  public name: string;
  public email: string;
  public address: Address;
  public password: string;
  public signature: string;

  constructor(cnpj: string, category:string, name:string, email: string, password: string, signature: string, address: Address) {
    this.cnpj = cnpj;
    this.name = name;
    this.email = email;
    this.category = category;
    this.address = address;
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

  public async create(cnpj: string, category:string, name:string, email: string, password: string, signature: string, address: Address): Promise<Company>{
    const response = await fetch(`http://192.168.1.5:3333/company`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              cnpj: cnpj,
              name: name,
              category: category,
              email: email,
              password: password,
              signature: signature,
              address_cep: address.cep,
              address_uf: address.uf,
              address_cidade: address.localidade,
              address_logradouro: address.logradouro,
              address_numero: address.unidade,
              address_complemento: address.complemento

            })
        })
        
        const responseJSON = await response.json();
        const responseStatus = response.status;
        if(responseStatus !== 200) throw new Error(responseJSON.message)
        return responseJSON;

  }
}