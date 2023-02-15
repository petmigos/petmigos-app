import { Hygiene } from "../../entities/hygiene";
import { HygieneService } from "../../services/hygieneService";

export class FindAll {
  constructor(private readonly hygieneService: HygieneService) {}

  async execute(petId: string): Promise<Hygiene[]> {
    return this.hygieneService.findAll(petId);
  }
}
