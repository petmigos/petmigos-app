import { Pet } from "../entities/pet";
import { ip } from "../entities/ip";

export class PetService {

  async register(newPet: Pet): Promise<Pet> {
    const { ownerId, name, type, birthday, gender, tags, image, } = newPet;
    console.log(newPet);
    const response = await fetch(
      `http://${ip}:3333/cadastroUser/${ownerId}/pets`,
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

  /*async fecthAll(): Promise<Pet[]> {
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
  }*/

  /*async findById(id: string): Promise<Pet | undefined> {
    return {
      _id: "123",
      birthday: new Date("2022-02-03"),
      gender: "Male",
      imageURL:
        "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
      name: "Gatino",
      type: "Gato",
      tags: [],
    };
  }*/

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
