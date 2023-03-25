import { Pet } from "../../entities/pet";
import { PetService } from "../../services/petService";

export class CreatePet {
  private petService: PetService;

  constructor(petService: PetService) {
    this.petService = petService;
  }

  async execute(newPet: Pet) {

    return this.petService.register(
      newPet
    );

  };

  async uploadImg(photo): Promise<string> {

    const img = await this.petService.cloudinaryUpload(photo);
    return img;
    
  };

}