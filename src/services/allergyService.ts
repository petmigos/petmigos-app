import { Allergy, RiskEnum } from "../entities/allergy";
import { ip } from "../entities/ip";

export class AllergyService {
  
  async create(newAllergy: Allergy, petId: string): Promise<Allergy> {
    return {
      _id: "123",
      name: "Minhoca",
      risk: RiskEnum.HIGH,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    
    // const { name, risk } =
    //   newAllergy;
    // const response = await fetch(
    //   `http://${ip}:3333/pets/${petId}/allergies`,
    //   {
    //     method: "POST",
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       name: name,
    //       risk: risk,
    //     }),
    //   }
    // );

    // const responseJSON = await response.json();
    // const responseStatus = response.status;
    // if (responseStatus !== 200) throw new Error(responseJSON.message);
    // return responseJSON;
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

    // const response = await fetch(`http://${ip}:3333/pets/${petId}/allergies`);

    // const responseJSON = await response.json();
    // const responseStatus = response.status;
    // if (responseStatus !== 200) throw new Error(responseJSON.message);
    // return responseJSON;
  }
}
