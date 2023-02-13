import { Allergy } from "../../entities/allergy";
import { AllergyService } from "../../services/allergyService";

export class FindAll {
  constructor(private readonly allergyService: AllergyService) {}

  async execute(petId: string): Promise<Allergy[]> {
    return this.allergyService.findAll(petId);
  }
}
