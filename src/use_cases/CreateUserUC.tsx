import { User } from "../entities/user";
import CadastroService from "../services/CadastroUserService";

export default class Cadastro {

   private cadastroService: CadastroService;

   constructor(loginService: CadastroService) {
      this.cadastroService = loginService
   }

   async execute(username: string, email: string, password: string, confPassword: string): Promise<User> {
      if (!this.isValidField(password)) throw new Error("Preencha o campo de senha.");
      if(!this.isValidPassword(password)) throw new Error("A senha deve possuir entre 8 e 20 caracteres, contendo números e letras maiúscula e minusculas.")
      if (!this.isPasswordEqual(password, confPassword)) throw new Error("As senhas não coincidem");
      if (!this.isValidField(username)) throw new Error("Preencha o campo de nome.");
      if (!this.isValidEmail(email)) throw new Error("Insira um email válido.");

      const createdUser = await this.cadastroService.create(username, email, password);

      return createdUser;
   }

   private isPasswordEqual(password: string, confPassword: string) {
      return password === confPassword
    }

   private isValidPassword(password: string) {
      const passwordValidation = /^.*(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/
      return passwordValidation.test(password)
    }

   private isValidField(field: string): boolean {
      return field !== ""
   }

   private isValidEmail = (email: string) => {
      const emailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (emailValidation.test(email) || email.length === 0) {
         return true;
      }
      return false;
   }
}