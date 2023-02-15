import { Vaccine } from "../../entities/vaccine";
import { VaccineService } from "../../services/vaccineService";

export class Create {
  constructor(private readonly vaccineService: VaccineService) {}

  async execute(newVaccine: Vaccine, petId: string): Promise<Vaccine> {
    return this.vaccineService.create(newVaccine, petId);
  }
}
