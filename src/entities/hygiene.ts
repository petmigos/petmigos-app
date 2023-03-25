import { Pet } from "./pet";

export interface Hygiene {
  _id?: string;
  category: string;
  description: string;
  done: boolean;
  date: Date;
  pet?: Pet;
  createdAt?: Date;
  updatedAt?: Date;
}
