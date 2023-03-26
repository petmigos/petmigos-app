import { VaccineService } from "../../services/vaccineService";

export class DeleteVaccine {
  constructor(private readonly petService: VaccineService) {}

  async execute(petId: string, vaccineId: string) {
    return this.petService.delete(petId, vaccineId);
  }
}
