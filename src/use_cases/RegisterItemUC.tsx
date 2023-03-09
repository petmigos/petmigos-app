import CadastroItemService from "../services/ItemService";
import { Item } from "../entities/item";
import { Company } from "../services/CadastroCompanyService";

export default class CadastroItem {
  private cadastroItemService: CadastroItemService;

  constructor(cadastroItemService: CadastroItemService) {
    this.cadastroItemService = cadastroItemService;
  }

  async execute(
    newItem: Item
  ): Promise<Item> {
    const itemregistered = await this.cadastroItemService.register(
      newItem
    );

    return itemregistered;
  }
}
