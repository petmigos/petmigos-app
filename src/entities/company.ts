import { Address } from "./address";

export interface Company{
    _id?: string;
    cnpj: string;
    category: string;
    name: string;
    email: string;
    password: string;
    signature: string;
    address: Address;
    createdAt?: Date;
    updatedAt?: Date;
}