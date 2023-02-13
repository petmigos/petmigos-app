export interface Pet {
  _id?: string;
  imageURL: string;
  name: string;
  birthday: Date;
  tags: string[];
  gender: "Male" | "Female";
  type: string;
  createdAt?: Date;
  updatedAt?: Date;
}
