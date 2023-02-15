import { Vaccine } from "../../entities/vaccine";
import { VaccineService } from "../../services/vaccineService";

export class FindAll {
  constructor(private readonly vaccineService: VaccineService) {}

  async execute(petId: string): Promise<Vaccine[]> {
    return this.vaccineService.findAll(petId);
  }
}
