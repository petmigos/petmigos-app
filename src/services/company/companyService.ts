import axios from 'axios';
import { Address } from '../../entities/address';
import { ip } from "../../entities/ip"
import { Company } from '../../entities/company';

export class CompanyService {

  public async create(newCompany): Promise<Company>{
    const {formatCNPJ, selectedCategory, name, email, password, signature, address, image, key} = newCompany;
    const response = await fetch(`http://${ip}:3333/cadastroCompany`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              image: image,
              cnpj: formatCNPJ,
              name: name,
              category: selectedCategory,
              email: email,
              password: password,
              signature: signature,
              address_cep: address.cep,
              address_uf: address.uf,
              address_cidade: address.localidade,
              address_logradouro: address.logradouro,
              address_numero: address.unidade,
              address_complemento: address.complemento,
              key: key
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
      return data.map(company => ({ name: company.name, _id: company._id, category: company.category, image: company.image }));
    } catch (error) {
      console.error("ERROR: " + error);
      return [];
    }
  }
  
}