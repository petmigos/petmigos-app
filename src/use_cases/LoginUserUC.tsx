import LoginService from "../services/LoginUserService";
import { User } from "../entities/user";

export default class LoginUser {
   private loginService: LoginService;

   constructor(loginService: LoginService) {
      this.loginService = loginService
   }

   async execute(email: string, password: string): Promise<User> {

      if (!this.isValidField(password)) throw new Error("Preencha o campo de senha.");
      if (!this.isValidField(email)) throw new Error("Preencha o campo de email.");
      if (!this.isValidEmail(email)) throw new Error("Insira um email válido.");

      const loggedUser = await this.loginService.login(email, password);

      return loggedUser;

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