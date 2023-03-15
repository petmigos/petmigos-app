import ItemService from "../../services/ItemService";

export class FindById {
  constructor(private readonly itemService: ItemService) {}

  async execute(id: string) {
    return this.itemService.findById(id);
  }
}
