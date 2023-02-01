import LoginService  from "../services/LoginService";

export default class Login {
   private loginService: LoginService;

   constructor(loginService: LoginService){
      this.loginService = loginService
   }

   execute(username: string, password: string): void {

     this.loginService.login(username, password);
     
   }

}