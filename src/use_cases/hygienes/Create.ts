import { Hygiene } from "../../entities/hygiene";
import { HygieneService } from "../../services/hygieneService";

export class Create {
  constructor(private readonly hygieneService: HygieneService) {}

  async execute(newHygiene: Hygiene, petId: string): Promise<Hygiene> {
    return this.hygieneService.create(newHygiene, petId);
  }
}
