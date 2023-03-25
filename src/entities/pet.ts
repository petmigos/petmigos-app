import { User } from "./user";

export interface Pet {
  _id?: string;
  ownerId: string;
  owner?: User;
  name: string;
  type: string;
  birthday: Date;
  gender: string;
  tags: string[];
  image: string;
  createdAt?: Date;
  updatedAt?: Date;
}
