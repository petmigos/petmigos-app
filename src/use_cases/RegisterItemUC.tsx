import CadastroItemService from "../services/ItemService";
import { Item } from "../entities/item";

export default class CadastroItem {
  private cadastroItemService: CadastroItemService;

  constructor(cadastroItemService: CadastroItemService) {
    this.cadastroItemService = cadastroItemService;
  }

  async execute(
    title: string,
    description: string,
    price: number,
    category: string,
    img: string,
    quantity: number
  ): Promise<Item> {
    const itemregistered = await this.cadastroItemService.register(
      title,
      description,
      price,
      category,
      img,
      quantity
    );

    return itemregistered;
  }
}
