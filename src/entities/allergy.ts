import { Pet } from "./pet";

export enum RiskEnum {
  LOW = "Low",
  MODERATE = "Moderate",
  HIGH = "High",
}

export interface Allergy {
  _id?: string;
  name: string;
  risk: RiskEnum;
  pet?: Pet;
  createdAt: Date;
  updatedAt: Date;
}
