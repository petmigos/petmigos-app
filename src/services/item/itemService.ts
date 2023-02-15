import { Item } from "../../entities/item";

export class ItemService {
    async create(newItem: Item, companyId: string): Promise<Item> {
      return {
        _id: "25",
        title: "Ração",
        description: "Ração pedigree",
        price: 12.95,
        category: "Alimentação",
        store_id: companyId
      };
    }
  
    async findAll(petId: string): Promise<Item[]> {
      return [
        {
            _id: "23",
            title: "Ração",
            description: "Ração pedigree",
            price: 12.95,
            category: "Alimentação",
            store_id: "123"
        },
        {
            _id: "24",
            title: "Coleira",
            description: "Coleira rosa",
            price: 30,
            category: "Petshop",
            store_id: "123"
        },
      ];
    }
  }