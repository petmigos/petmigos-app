import { Company } from "../entities/company";
import { ip } from "../entities/ip";

export default class LoginCompanyService {

    async login(email: string, password: string): Promise<Company> {

        const response = await fetch(`http://${ip}:3333/loginCompany`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
            })
        })
        const responseJSON = await response.json();
        const responseStatus = response.status;
        if (responseStatus !== 200) throw new Error(responseJSON.message);
        return responseJSON;

    }

}