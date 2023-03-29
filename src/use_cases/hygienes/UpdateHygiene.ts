import { Hygiene } from "../../entities/hygiene";
import { HygieneService } from "../../services/hygieneService";


export class UpdateHygiene {
  private hygieneService: HygieneService;

  constructor(hygieneService: HygieneService) {
    this.hygieneService = hygieneService;
  }

  async execute(petId: string, hygieneId: string, newHygiene: Hygiene) {
    return this.hygieneService.findByIdAndUpdate(petId, hygieneId, newHygiene);
  }
}