import CadastroItemService from "../services/ItemService";
import { Item } from "../entities/item";
import { Company } from "../services/CadastroCompanyService";

export default class CadastroItem {
  private cadastroItemService: CadastroItemService;

  constructor(cadastroItemService: CadastroItemService) {
    this.cadastroItemService = cadastroItemService;
  }
  async execute(newItem: Item): Promise<Item> {
    if (!this.isValidField(newItem.title)) throw new Error("Preencha o campo de Título");
    if (!this.isValidField(newItem.description)) throw new Error("Preencha o campo de descrição");
    if (!this.isValidField(newItem.price)) throw new Error("Preço inválido");
    if (!this.isValidField(newItem.description)) throw new Error("Preencha o campo de descrição");
    
    const itemregistered = await this.cadastroItemService.register(newItem);

    return itemregistered;
  }

  private isValidField(field: string): boolean {
    return field !== "";
  }
  

  async uploadImg(photo): Promise<string> {
    const img = await this.cadastroItemService.cloudinaryUpload(photo);
    return img;
  }
}
