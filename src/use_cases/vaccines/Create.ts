import { Vaccine } from "../../entities/vaccine";
import { VaccineService } from "../../services/vaccineService";

export class CreateVaccine {
  constructor(private readonly vaccineService: VaccineService) {}

  async execute(newVaccine: Vaccine, petId: string): Promise<Vaccine> {
    if (!this.isValidField(newVaccine.name))
      throw new Error("Preencha o campo de nome.");
    if (!this.isValidField(newVaccine.locale.name))
      throw new Error("Preencha o campo de local.");
    if (!this.isValidDate(newVaccine.date))
      throw new Error("Data inválida");

    return this.vaccineService.create(newVaccine, petId);
  }

  private isValidField(field: string): boolean {
    return field !== "";
  }

  private isValidDate(field: Date): boolean {
    return field !== null;
  }
}
