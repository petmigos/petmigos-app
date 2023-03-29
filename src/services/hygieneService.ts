import { Hygiene } from "../entities/hygiene";
import { ip } from "../entities/ip";

export class HygieneService {
  async create(newHygiene: Hygiene, petId: string): Promise<Hygiene> {
    const { category, description, done, date } = newHygiene;
    const response = await fetch(`http://${ip}:3333/pets/${petId}/hygienes`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        category: category,
        description: description,
        done: done,
        date: date,
      }),
    });

    const responseJSON = await response.json();
    const responseStatus = response.status;
    if (responseStatus !== 200) throw new Error(responseJSON.message);
    return responseJSON;
  }

  async findAll(petId: string): Promise<Hygiene[]> {
    const response = await fetch(`http://${ip}:3333/pets/${petId}/hygienes`);

    const responseJSON = await response.json();
    const responseStatus = response.status;
    if (responseStatus !== 200) throw new Error(responseJSON.message);
    return responseJSON;
  }

  async findByIdAndUpdate(
    petId: string,
    hygieneId: string,
    updatedHygiene: Hygiene
  ): Promise<Hygiene | undefined> {
    const { category, description, done, date } = updatedHygiene;
    const response = await fetch(
      `http://${ip}:3333/pets/${petId}/hygienes/${hygieneId}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category: category,
          description: description,
          done: done,
          date: date,
        }),
      }
    );

    const responseJSON = await response.json();
    const responseStatus = response.status;
    if (responseStatus !== 200) throw new Error(responseJSON.message);
    return responseJSON;
  }

  async delete(petId: string, hygieneId: string): Promise<string> {
    const response = await fetch(
      `http://${ip}:3333/pets/${petId}/hygienes/${hygieneId}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: hygieneId,
        }),
      }
    );
    const responseJSON = await response.json();
    const responseStatus = response.status;
    if (responseStatus !== 200) throw new Error(responseJSON.message);
    return responseJSON;
  }
}
