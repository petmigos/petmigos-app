import { Vaccine } from "../../entities/vaccine";
import { VaccineService } from "../../services/vaccineService";

export class UpdateVaccine {
  private vaccineService: VaccineService;

  constructor(vaccineService: VaccineService) {
    this.vaccineService = vaccineService;
  }

  async execute(petId: string, vaccineId: string, newVaccine: Vaccine) {
    return this.vaccineService.findByIdAndUpdate(petId, vaccineId, newVaccine);
  }
}