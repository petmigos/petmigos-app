import LoginService  from "../services/LoginService";
import { User } from "../entities/user";

export default class Login {
   private loginService: LoginService;

   constructor(loginService: LoginService){
      this.loginService = loginService
   }

   async execute(username: string, password: string): Promise<User> {

     return this.loginService.login(username, password);
     
   }

}