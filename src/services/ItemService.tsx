import { Item } from "../entities/item";
import { ip } from "../entities/ip";
import { id_comp } from "../screens/Auth/LoginScreen";

export default class ItemService {
  async register(newItem: Item): Promise<Item> {
    const { companyId, title, description, price, category, quantity, image } =
      newItem;
    console.log(newItem);
    const response = await fetch(
      `http://${ip}:3333/companies/${companyId}/items`,
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
          quantity: quantity,
          image: image,
        }),
      }
    );

    const responseJSON = await response.json();
    const responseStatus = response.status;
    if (responseStatus !== 200) throw new Error(responseJSON.message);
    return responseJSON;
  }

  async fetchAllByCompany(companyId: string): Promise<Item[]> {
    const response = await fetch(
      `http://${ip}:3333/companies/${companyId}/items`
    );

    const responseJSON = await response.json();
    const responseStatus = response.status;
    if (responseStatus !== 200) throw new Error(responseJSON.message);
    return responseJSON;
  }

  async fetchAll(): Promise<Item[]> {
    const response = await fetch(`http://${ip}:3333/companies/items`);

    const responseJSON = await response.json();
    const responseStatus = response.status;
    if (responseStatus !== 200) throw new Error(responseJSON.message);
    return responseJSON;
  }

  async findByIdAndCompany(companyId: string, itemId: string): Promise<Item> {
    const response = await fetch(
      `http://${ip}:3333/companies/${companyId}/items/${itemId}`
    );

    const responseJSON = await response.json();
    const responseStatus = response.status;
    if (responseStatus !== 200) throw new Error(responseJSON.message);
    return responseJSON;
  }

  async findById(itemId: string): Promise<Item> {
    const response = await fetch(`http://${ip}:3333/items/${itemId}`);

    const responseJSON = await response.json();
    const responseStatus = response.status;
    if (responseStatus !== 200) throw new Error(responseJSON.message);
    return responseJSON;
  }

  async delete(id: string): Promise<string> {
    const companyId = id_comp;

    const response = await fetch(
      `http://${ip}:3333/companies/${companyId}/items/${id}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
        }),
      }
    );
    const responseJSON = await response.json();
    const responseStatus = response.status;
    if (responseStatus !== 200) throw new Error(responseJSON.message);
    return responseJSON;
  }


  async buy(item): Promise<string> {
    // const {
    //   companyId: companyId,
    //   itemId: itemId,
    //   title: title,
    //   price,
    //   quantity,
    // } = item;
    // console.log("LOJA: " + companyId + "    item: " + itemId);
    // const response = await fetch(
    //   `http://${ip}:3333//companies/${companyId}/items/${itemId}/buy`,
    //   {
    //     method: "POST",
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       title: title,
    //       price: price,
    //       quantity: quantity,
    //     }),
    //   })

    //   const responseJSON = await response.json();
    //   const responseStatus = response.status;
    //   if (responseStatus !== 200) throw new Error(responseJSON.message);
    //   return responseJSON;

    const responseJSON = JSON.stringify({
      _id: 123,
      url: "https://www1.uea.edu.br",
    });


    return responseJSON;
  }
}
