import CadastroItemService from "../services/ItemService";
import { Item } from "../entities/item";
import { Company } from "../services/CadastroCompanyService";

export default class CadastroItem {
  private cadastroItemService: CadastroItemService;

  constructor(cadastroItemService: CadastroItemService) {
    this.cadastroItemService = cadastroItemService;
  }
  async execute(newItem: Item): Promise<Item> {
    if (!this.isValidFieldText(newItem.title))
      throw new Error("Preencha o campo de Título");
    if (!this.isValidFieldText(newItem.description))
      throw new Error("Preencha o campo de descrição");
    if (!this.isValidFieldNumber(newItem.price))
      throw new Error("Preço inválido");

    const itemregistered = await this.cadastroItemService.register(newItem);

    return itemregistered;
  }

  private isValidFieldText(field: string): boolean {
    return field !== "";
  }

  private isValidFieldNumber(field: number): boolean {
    return field !== 0;
  }

  async uploadImg(photo): Promise<string> {
    const img = await this.cadastroItemService.cloudinaryUpload(photo);
    return img;
  }
}
