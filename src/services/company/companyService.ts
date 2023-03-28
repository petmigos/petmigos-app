import axios from 'axios';
import { Address } from '../../entities/address';
import { ip } from "../../entities/ip"

class Company{
  public cnpj: string;
  public category: string;
  public name: string;
  public email: string;
  public address: Address;
  public password: string;
  public signature: string;

  constructor(cnpj: string, category:string, name:string, email: string, password: string, signature: string, address: Address, imagem: string) {
    this.cnpj = cnpj;
    this.name = name;
    this.email = email;
    this.category = category;
    this.address = address;
    this.password = password;
    this.signature = signature;
  }
}

export class CompanyService {

  public async create(cnpj: string, category:string, name:string, email: string, password: string, signature: string, address: Address, imagem: string): Promise<Company>{
    const response = await fetch(`http://${ip}:3333/cadastroCompany`, {
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

  async login(email: string, password: string): Promise<Company> {

    const response = await fetch(`http://${ip}:3333/loginCompany`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password,
        })
    })
    const responseJSON = await response.json();
    const responseStatus = response.status;
    if (responseStatus !== 200) throw new Error(responseJSON.message);
    return responseJSON;

  }

  async fetchCompanies() {
    try {
      const response = await fetch(`http://${ip}:3333/companies`);
      const data = await response.json();
      return data.map(company => ({ name: company.name, _id: company._id, category: company.category }));
    } catch (error) {
      console.error("ERROR: " + error);
      return [];
    }
  }
}