import { Item } from "../entities/item";
import { ip } from "../entities/ip";

export default class CadastroItemService {

    async register(title: string, description: string, price: number, category: string, image: string, quantity: number): Promise<Item> {
        console.log(image)
        const response = await fetch(
          `http://${ip}:3333//companies/:companyId/items`,
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: title,
              description: description,
              price: price,
              category: category,
              image: "image",
              quantity: quantity,
            }),
          }
        );



        const responseJSON = await response.json();
        const responseStatus = response.status;
        if (responseStatus !== 200) throw new Error(responseJSON.message);
        return responseJSON;

    }

}