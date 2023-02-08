import { Vaccine } from "../entities/vaccine";

export class VaccineService {
  async create(newVaccine: Vaccine, petId: string): Promise<Vaccine> {
    return {
      _id: "123",
      applied: false,
      createdAt: new Date(),
      date: new Date(2023, 1, 8, 23, 59),
      name: "Raiva",
      updatedAt: new Date(),
      locale: { name: "Petz" },
    };
  }

  async findAll(petId: string): Promise<Vaccine[]> {
    return [
      {
        _id: "123",
        applied: false,
        createdAt: new Date(),
        date: new Date(2023, 1, 8, 23, 59),
        name: "Raiva",
        updatedAt: new Date(),
        locale: { name: "Petz" },
      },
      {
        _id: "124",
        applied: true,
        createdAt: new Date(),
        date: new Date(2003, 1, 8, 23, 59),
        name: "Raiva",
        updatedAt: new Date(),
        locale: { name: "Petz" },
      },
    ];
  }
}
