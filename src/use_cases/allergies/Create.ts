import { Allergy } from "../../entities/allergy";
import { AllergyService } from "../../services/allergyService";

export class CreateAllergy {
  constructor(private readonly allergyService: AllergyService) {}

  async execute(newAllergy: Allergy, petId: string): Promise<Allergy> {
    return this.allergyService.create(newAllergy, petId);
  }
}
