import { Pet } from "./pet";

export interface Locale {
  name: string;
}

export interface Vaccine {
  _id?: string;
  name: string;
  locale: Locale;
  applied: boolean;
  date: Date;
  pet?: Pet;
  createdAt?: Date;
  updatedAt?: Date;
}
