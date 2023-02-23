import { CompanyService } from "../services/company/companyService";
import { Company } from "../entities/company";

export default class LoginCompany {
   private loginService: CompanyService;

   constructor(loginService: CompanyService) {
      this.loginService = loginService
   }

   async execute(email: string, password: string): Promise<Company> {

      if (!this.isValidField(password)) throw new Error("Preencha o campo de senha.");
      if (!this.isValidField(email)) throw new Error("Preencha o campo de email.");
      if (!this.isValidEmail(email)) throw new Error("Insira um email válido.");

      const loggedCompany = await this.loginService.login(email, password);

      return loggedCompany;

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