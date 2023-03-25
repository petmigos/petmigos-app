import { ip } from "../entities/ip";
import { Vaccine } from "../entities/vaccine";

export class VaccineService {
  async create(newVaccine: Vaccine, petId: string): Promise<Vaccine> {
    const { name, locale, applied, date } = newVaccine;
    const response = await fetch(`http://${ip}:3333/pets/${petId}/vaccines`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        locale: locale,
        applied: applied,
        date: date,
      }),
    });

    const responseJSON = await response.json();
    const responseStatus = response.status;
    if (responseStatus !== 200) throw new Error(responseJSON.message);
    return responseJSON;
  }

  async findAll(petId: string): Promise<Vaccine[]> {
    const response = await fetch(`http://${ip}:3333/pets/${petId}/vaccines`);

    const responseJSON = await response.json();
    const responseStatus = response.status;
    if (responseStatus !== 200) throw new Error(responseJSON.message);
    return responseJSON;
  }
}
