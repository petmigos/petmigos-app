import { Hygiene } from "../../entities/hygiene";
import { HygieneService } from "../../services/hygieneService";

export class CreateHygiene {
  constructor(private readonly hygieneService: HygieneService) {}

  async execute(newHygiene: Hygiene, petId: string): Promise<Hygiene> {
    if (!this.isValidField(newHygiene.category))
      throw new Error("Preencha o campo de categoria.");
    if (!this.isValidField(newHygiene.description))
      throw new Error("Preencha o campo de descrição.");
    if (!this.isValidDate(newHygiene.date)) 
      throw new Error("Data inválida");

    return this.hygieneService.create(newHygiene, petId);
  }

  private isValidField(field: string): boolean {
    return field !== "";
  }

  private isValidDate(field: Date): boolean {
    return field !== null;
  }
}
