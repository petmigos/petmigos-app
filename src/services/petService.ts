import { Pet } from "../entities/pet";

export class PetService {
  async fecthAll(): Promise<Pet[]> {
    return [
      {
        _id: "123",
        birthday: new Date("2022-02-03"),
        gender: "Male",
        imageURL:
          "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
        name: "Gatino",
        type: "Gato",
        tags: [],
      },
      {
        _id: "1234",
        birthday: new Date("2023-01-01"),
        gender: "Female",
        imageURL:
          "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
        name: "Gatiena",
        type: "Gato",
        tags: [],
      },
    ];
  }
}
