import ItemService from "../../services/ItemService";

export class FindByIdAndCompany {
  constructor(private readonly itemService: ItemService) {}

  async execute(id: string, id_comp: string) {
    return this.itemService.findByIdAndCompany(id, id_comp);
  }
}
