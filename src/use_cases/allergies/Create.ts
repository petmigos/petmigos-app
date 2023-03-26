import { Allergy } from "../../entities/allergy";
import { AllergyService } from "../../services/allergyService";

export class CreateAllergy {
  constructor(private readonly allergyService: AllergyService) {}

  async execute(newAllergy: Allergy, petId: string): Promise<Allergy> {

    if (!this.isValidField(newAllergy.name))
      throw new Error("Preencha o campo de nome.");

    return this.allergyService.create(newAllergy, petId);
  }

  private isValidField(field: string): boolean {
    return field !== "";
  }
}
