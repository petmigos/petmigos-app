import { Hygiene } from "../entities/hygiene";

export class HygieneService {
  async create(newHygiene: Hygiene, petId: string): Promise<Hygiene> {
    return {
      _id: "123",
      category: "Banho",
      date: new Date(2023, 1, 12, 23, 59),
      description: "Banho do meu bebê",
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }

  async findAll(petId: string): Promise<Hygiene[]> {
    return [
      {
        _id: "123",
        done: false,
        category: "Banho",
        date: new Date(2023, 1, 8, 23, 59),
        description: "Banho do meu bebê",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        _id: "1234",
        done: true,
        category: "Banho",
        date: new Date(2003, 1, 8, 23, 59),
        description: "Banho do meu bebê",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
  }
}
