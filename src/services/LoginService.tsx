export default class LoginService {
    login(user: string, pass: string): void{

        let reqs = fetch('http://192.168.0.6:3000/acess', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nameUser: user,
                passwordUser: pass,
            })
        })

    }

}