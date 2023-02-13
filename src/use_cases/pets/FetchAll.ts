import { Pet } from "../../entities/pet";
import { PetService } from "../../services/petService";

export class FetchAll {
  constructor(private readonly petService: PetService) {}

  async execute(): Promise<Pet[]> {
    return this.petService.fecthAll();
  }
}
