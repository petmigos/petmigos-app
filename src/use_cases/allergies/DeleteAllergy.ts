import { HygieneService } from "../../services/hygieneService";


export class DeleteHygiene {
  constructor(private readonly petService: HygieneService) {}

  async execute(petId: string, hygieneId: string) {
    return this.petService.delete(petId, hygieneId);
  }
}
