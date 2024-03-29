import { User} from "../entities/user"
import { ip } from "../entities/ip"

export default class LoginService {

    async login(email: string, password: string): Promise<User> {

        const response = await fetch(`http://${ip}:3333/loginUser`, {
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