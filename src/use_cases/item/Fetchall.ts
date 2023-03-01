import ItemService from "../../services/ItemService";

export class FetchAll {
  constructor(private readonly itemService: ItemService) {}

  async execute(companyId: string) {
    return this.itemService.fetchAll(companyId);
  }
}
