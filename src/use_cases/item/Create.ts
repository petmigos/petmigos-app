import { Item } from "../../entities/item";
import ItemService from "../../services/ItemService";

export class Create {
  constructor(private readonly itemService: ItemService) {}

  async execute(newItem: Item) {
    const {
      category,
      companyId: companyId,
      description,
      image,
      title: name,
      price,
      quantity,
    } = newItem;
    return this.itemService.register(
      newItem
    );
  }
}
