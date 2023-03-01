import ItemService from "../../services/ItemService";

export class FindById {
  constructor(private readonly itemService: ItemService) {}

  async execute(companyId: string, id: string) {
    return this.itemService.findById(companyId, id);
  }
}
