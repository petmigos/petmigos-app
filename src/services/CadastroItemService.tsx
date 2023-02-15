import { Item } from "../entities/item";
import { ip } from "../entities/ip";

export default class CadastroItemService {

    async register(title: string, description: string, price: number, category: string, image: string): Promise<Item> {

        const response = await fetch(`http://${ip}:3333/cadastroItem`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                description: description,
                price: price,
                category: category,
                image: image,
            })
        })

        const responseJSON = await response.json();
        const responseStatus = response.status;
        console.log(responseJSON);
        if (responseStatus !== 200) throw new Error(responseJSON.message);
        return responseJSON;

    }

}