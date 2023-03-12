import ItemService from "../../services/ItemService";

export class Delete {
  constructor(private readonly itemService: ItemService) {}

  async execute(id: string) {
    return this.itemService.delete(id);
  }
}
