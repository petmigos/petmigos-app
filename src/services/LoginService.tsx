import { User } from "../entities/user"

export default class LoginService {

     async login(user: string, password: string): Promise<User> {

         const response = await fetch('http://192.168.0.86:3333/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nameUser: user,
                passwordUser: password,
            })
        })
        const responseJSON = await response.json();
        const responseStatus = response.status;
        if(responseStatus !== 200) return undefined;
        return responseJSON;

    }

}