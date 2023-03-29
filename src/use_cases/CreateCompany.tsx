import { CompanyService } from "../services/company/companyService"
import { Company } from "../entities/company";
import { cnpj } from 'cpf-cnpj-validator';
import { Address } from "../entities/address";

export default class CreateCompany {
  private companyService: CompanyService;
  constructor(companyService: CompanyService) {
    this.companyService = companyService;
  }

  async execute(newCompany): Promise<Company> {
    const {currentCNPJ, selectedCategory, name, email, password, confPassword, signature, address, image} = newCompany;
    const formatCNPJ = cnpj.format(currentCNPJ)
    const isEmpty =
      (this.isEmpty(formatCNPJ) || this.isEmpty(selectedCategory) ||
        this.isEmpty(name) || this.isEmpty(email) ||
        this.isEmpty(confPassword) || this.isEmpty(password) ||
        this.isEmpty(address.unidade) || this.isEmpty(address.cep))

    if (isEmpty) throw new Error("Preencha todos os campos obrigatórios sinalizados por *.")
    if (!this.isValidEmail(email)) throw new Error("Preencha o campo de E-mail corretamente.")
    if (!this.isValidCNPJ(formatCNPJ)) throw new Error("CNPJ inválido.")
    if (!this.isValidPassword(password)) throw new Error("A senha deve possuir entre 8 e 20 caracteres, contendo números e letras maiúscula e minusculas.")
    if (!this.isPasswordEqual(password, confPassword)) throw new Error("As senhas não coincidem.")
    if (!this.hasSignature(signature)) throw new Error("É preciso escolher seu plano de assinatura.")

    const createdCompany = await this.companyService.create({formatCNPJ, selectedCategory, name, email, password, signature, address, image})
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