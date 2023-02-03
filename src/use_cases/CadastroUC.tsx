import { User } from "../entities/user";
import CadastroService from "../services/CadastroService";

export default class Cadastro {

   private cadastroService: CadastroService;

   constructor(loginService: CadastroService) {
      this.cadastroService = loginService
   }

   async execute(username: string, email: string, password: string, confPassword: string): Promise<User> {

      if (!this.isValidField(password)) throw new Error("Preencha o campo de senha.");
      if (!this.isValidatidPassword(password, confPassword)) throw new Error("As senhas não coincidem");
      if (!this.isValidField(email)) throw new Error("Preencha o campo de email.");
      if (!this.isValidField(username)) throw new Error("Preencha o campo de nome.");
      const createdUser = await this.cadastroService.create(username, email, password);

      return createdUser;
   }

   private isValidatidPassword(password: string, confPassword: string): boolean {
      return password === confPassword;
   }

   private isValidField(field: string): boolean {
      return field !== ""
   }
}