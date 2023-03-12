import ItemService from "../../services/ItemService";

export class FetchAll {
  constructor(private readonly itemService: ItemService) {}

  async execute() {
    return this.itemService.fetchAll();
  }
}
