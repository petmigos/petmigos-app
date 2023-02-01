import CadastroService from "../services/CadastroService";

export default class Cadastro {
   private cadastroService: CadastroService;

   constructor(loginService: CadastroService){
      this.cadastroService = loginService
   }

   execute(username: string, email: string, password: string): void {

     this.cadastroService.create(username, email, password);
     
   }

}