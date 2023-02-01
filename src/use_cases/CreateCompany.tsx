import { CompanySignUpService, Company } from "../services/CompanyService"
import { Address } from "../services/CompanyService";

export class CreateCompany{
    private companySignService: CompanySignUpService;

    constructor(companySignService: CompanySignUpService) {
        this.companySignService = companySignService;
      }
    
    execute(cnpj: string, category:string, name:string, email: string, password: string, signature: string){
        const newCompany = new Company(cnpj, category, name, email, password, signature);
        this.companySignService.create(newCompany);
    }

    public verifyEmail = (email:string) =>{
        const emailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(emailValidation.test(email) || email.length === 0){
          return false;
        }
        return true;
      }
}