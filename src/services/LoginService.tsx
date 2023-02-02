export default class LoginService {

    login(user: string, password: string): void{

        let reqs = fetch('http://192.168.0.86:3333/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nameUser: user,
                passwordUser: password,
            })
        }).then(resp => console.log("Resposta: " + resp))
            .catch(error => console.log("Erro: " + error))

    }

}