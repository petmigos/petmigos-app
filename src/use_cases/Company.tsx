import { CompanyService } from "../services/CompanyService"

class SignUpCompany{
    private CompanyService: CompanyService;

    constructor(service: CompanyService) {
        this.CompanyService = service;
    }
}