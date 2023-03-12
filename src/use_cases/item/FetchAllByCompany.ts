import ItemService from "../../services/ItemService";

export class FetchAllByCompany {
  constructor(private readonly itemService: ItemService) {}

  async execute(companyId: string) {
    return this.itemService.fetchAllByCompany(companyId);
  }
}
