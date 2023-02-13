import { Pet } from "../../entities/pet";
import { PetService } from "../../services/petService";

export class FindById {
  constructor(private readonly petService: PetService) {}

  async execute(id: string): Promise<Pet | undefined> {
    return this.petService.findById(id);
  }
}
