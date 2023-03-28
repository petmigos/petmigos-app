import { AllergyService } from "../../services/allergyService";


export class DeleteAllergy {
  constructor(private readonly petService: AllergyService) {}

  async execute(petId: string, allergyId: string) {
    return this.petService.delete(petId, allergyId);
  }
}
