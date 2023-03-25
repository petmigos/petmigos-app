import { Pet } from "../../entities/pet";
import { PetService } from "../../services/petService";

export class FindById {
  constructor(private readonly petService: PetService) {}

  async execute(user_id: string, pet_id: string): Promise<Pet | undefined> {
    return this.petService.findById(user_id, pet_id);
  }
}
