import { User } from "../entities/user";

export default class CadastroService {

    async create(username: string, useremail: string, userpassword: string): Promise<User> {
        let response = await fetch('http://192.168.1.5:3333/cadastro', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nameUser: username,
                emailUser: useremail,
                passwordUser: userpassword,
            })
        })
        const responseJSON = await response.json();
        const responseStatus = response.status;
        if(responseStatus !== 200) throw new Error(responseJSON.message);
        return responseJSON;
    }
}