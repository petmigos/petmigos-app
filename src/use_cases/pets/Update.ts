import { Pet } from "../../entities/pet";
import { PetService } from "../../services/petService";

export class UpdatePet {
  private petService: PetService;

  constructor(petService: PetService) {
    this.petService = petService;
  }

  async execute(id_pet: string, newPet: Pet) {

    return this.petService.findByIdAndUpdate(
      id_pet,
      newPet
    );

  };

}