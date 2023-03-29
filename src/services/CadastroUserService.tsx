import { User } from "../entities/user";
import { ip } from "../entities/ip"

export default class CadastroService {

    async create(username: string, useremail: string, userpassword: string, image): Promise<User> {
        console.log(image)
        const response = await fetch(`http://${ip}:3333/cadastroUser`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: username,
                email: useremail,
                password: userpassword,
                image: "image"
            })
        })

        const responseJSON = await response.json();
        const responseStatus = response.status;
        if (responseStatus !== 200) throw new Error(responseJSON.message);
        return responseJSON;
    }

    async register(newUser: User): Promise<User> {
      const { name, email, password, image } =  newUser;
      console.log(newUser);
      const response = await fetch(
        `http://${ip}:3333/cadastroUser`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            password: password,
            image: image
          }),
        }
      );
  
      const responseJSON = await response.json();
      const responseStatus = response.status;
      if (responseStatus !== 200) throw new Error(responseJSON.message);
      return responseJSON;
    }
}