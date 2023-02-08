import axios from 'axios';
import { Address } from '../entities/address';
import { ip } from '../entities/user';

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

  public async create(cnpj: string, category:string, name:string, email: string, password: string, signature: string, address: Address): Promise<Company>{
    const response = await fetch(`http://${ip}:3333/company`, {
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