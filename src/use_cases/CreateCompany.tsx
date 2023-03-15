import { CompanyService } from "../services/company/companyService"
import { Company } from "../entities/company";
import { cnpj } from 'cpf-cnpj-validator';
import { Address } from "../entities/address";

export default class CreateCompany {
  private companyService: CompanyService;
  constructor(companyService: CompanyService) {
    this.companyService = companyService;
  }

  async execute(currentCNPJ: string, category: string, name: string, email: string, password: string[], signature: string, address: Address): Promise<Company> {
    currentCNPJ = cnpj.format(currentCNPJ)
    const isEmpty =
      (this.isEmpty(currentCNPJ) || this.isEmpty(category) ||
        this.isEmpty(name) || this.isEmpty(email) ||
        this.isEmpty(password[0]) || this.isEmpty(password[1]) ||
        this.isEmpty(address.unidade) || this.isEmpty(address.cep))

    if (isEmpty) throw new Error("Preencha todos os campos obrigatórios sinalizados por *.")
    if (!this.isValidEmail(email)) throw new Error("Preencha o campo de E-mail corretamente.")
    if (!this.isValidCNPJ(currentCNPJ)) throw new Error("CNPJ inválido.")
    if (!this.isValidPassword(password[0])) throw new Error("A senha deve possuir entre 8 e 20 caracteres, contendo números e letras maiúscula e minusculas.")
    if (!this.isPasswordEqual(password[0], password[1])) throw new Error("As senhas não coincidem.")
    if (!this.hasSignature(signature)) throw new Error("É preciso escolher seu plano de assinatura.")

    const createdCompany = await this.companyService.create(currentCNPJ, category, name, email, password[0], signature, address)
    return createdCompany;
  }

  private isValidEmail(email: string) {
    const emailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailValidation.test(email)

  }

  private isValidPassword(password: string) {
    const passwordValidation = /^.*(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/
    return passwordValidation.test(password)
  }

  private isEmpty(field: string) {
    if (field === undefined) return true
    return field.trim().length === 0 || field === null

  }

  private isPasswordEqual(password: string, confPassword: string) {
    return password === confPassword
  }

  private hasSignature(signature: string) {
    return signature !== null
  }

  private isValidCNPJ(currentCNPJ: string) {
    return cnpj.isValid(currentCNPJ)
  }
}

// 