import { PetService } from "../../services/petService";

export class Delete {
  constructor(private readonly petService: PetService) {}

  async execute(id_pet: string) {
    return this.petService.delete(id_pet);
  }
}
