import { Allergy, RiskEnum } from "../entities/allergy";

export class AllergyService {
  async create(newAllergy: Allergy, petId: string): Promise<Allergy> {
    return {
      _id: "123",
      name: "Minhoca",
      risk: RiskEnum.HIGH,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }

  async findAll(petId: string): Promise<Allergy[]> {
    return [
      {
        _id: "123",
        name: "Minhoca",
        risk: RiskEnum.HIGH,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        _id: "1234",
        name: "Minhoca",
        risk: RiskEnum.MODERATE,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
  }
}
