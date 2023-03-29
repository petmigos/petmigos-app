import { Pet } from "../entities/pet";
import { ip } from "../entities/ip";
import { id_user } from "../screens/Auth/LoginScreen";

export class PetService {
  async register(newPet: Pet): Promise<Pet> {
    const { ownerId, name, type, birthday, gender, tags, image } = newPet;
    console.log(newPet);
    const response = await fetch(`http://${ip}:3333/user/${ownerId}/pets`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        type: type,
        birthday: birthday,
        gender: gender,
        tags: tags,
        image: image,
      }),
    });

    const responseJSON = await response.json();
    const responseStatus = response.status;
    if (responseStatus !== 200) throw new Error(responseJSON.message);
    return responseJSON;
  }

  async fecthAll(id_user: string): Promise<Pet[]> {
    const response = await fetch(`http://${ip}:3333/user/${id_user}/pets`);

    const responseJSON = await response.json();
    const responseStatus = response.status;
    if (responseStatus !== 200) throw new Error(responseJSON.message);
    return responseJSON;
  }

  async findById(id_user: string, id_pet: string): Promise<Pet | undefined> {
    const response = await fetch(
      `http://${ip}:3333/user/${id_user}/pets/${id_pet}`
    );

    const responseJSON = await response.json();
    const responseStatus = response.status;
    if (responseStatus !== 200) throw new Error(responseJSON.message);
    return responseJSON;
  }

  async findByIdAndUpdate(
    id_pet: string,
    updatedPet: Pet
  ): Promise<Pet | undefined> {
    const { name, type, birthday, gender, tags, image } = updatedPet;
    const response = await fetch(
      `http://${ip}:3333/user/${id_user}/pets/${id_pet}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          type: type,
          birthday: birthday,
          gender: gender,
          tags: tags,
          image: image,
        }),
      }
    );

    const responseJSON = await response.json();
    const responseStatus = response.status;
    if (responseStatus !== 200) throw new Error(responseJSON.message);
    return responseJSON;
  }

  async delete(id_pet: string): Promise<string> {

    const response = await fetch(
      `http://${ip}:3333/user/${id_user}/pets/${id_pet}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id_pet,
        }),
      }
    );
    const responseJSON = await response.json();
    const responseStatus = response.status;
    if (responseStatus !== 200) throw new Error(responseJSON.message);
    return responseJSON;
  }

  async cloudinaryUpload(photo): Promise<string> {
    const formData = new FormData();
    formData.append("file", photo);
    formData.append("upload_preset", "lipjy5de");
    formData.append("cloud_name", "petmigosimages");

    const response = await fetch(
      "https://api.cloudinary.com/v1_1/petmigosimages/image/upload",
      {
        method: "post",
        body: formData,
      }
    );
    const data = await response.json();
    return data.url;
  }
}
