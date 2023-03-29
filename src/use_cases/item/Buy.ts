import { Item } from "../../entities/item";
import ItemService from "../../services/ItemService";

export class Buy {
  constructor(private readonly itemService: ItemService) {}

  async execute(newItem) {
    const {
      storeId: companyId,
      itemId: itemId,
      title,
      price,
      quantity
    } = newItem;
    return this.itemService.buy({companyId, itemId, title, price, quantity});
  }
}
