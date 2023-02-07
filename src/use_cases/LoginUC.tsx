import LoginService  from "../services/LoginService";
import { User } from "../entities/user";

export default class Login {
   private loginService: LoginService;

   constructor(loginService: LoginService){
      this.loginService = loginService
   }

   async execute(username: string, password: string): Promise<User> {

      if (!this.isValidField(password)) throw new Error("Preencha o campo de senha.");
      if (!this.isValidField(username)) throw new Error("Preencha o campo de nome/email.");
      const loggedUser = await this.loginService.login(username, password);

      return loggedUser;
     
   }

   private isValidField(field: string): boolean {
      return field !== ""
   }

}