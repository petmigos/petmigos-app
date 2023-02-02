export default class CadastroService {

    create(username: string, useremail: string, userpassword: string): void {
        let reqs = fetch('http://190.10.50.117:3333/cadastro', {
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
        }).then(resp => console.log("Resposta: " + resp))
            .catch(error => console.log("Erro: " + error))

    }

}