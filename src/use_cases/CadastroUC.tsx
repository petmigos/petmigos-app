import CadastroService from "../services/CadastroService";

export default class Cadastro {
   
   private cadastroService: CadastroService;

   constructor(loginService: CadastroService) {
      this.cadastroService = loginService
   }

   execute(username: string, email: string, password: string, confPassword: string): boolean {

      if (this.validationPassword(password, confPassword)) {
         this.cadastroService.create(username, email, password);
         return true;
      } else {
         return false;
      }
   }

   private validationPassword(password: string, confPassword: string): boolean {
      if (password === confPassword) {
         return true;
      } else {
         return false;
      }
   }

}