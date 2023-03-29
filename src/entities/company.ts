import { Address } from "./address";

export interface Company{
    _id?: string;
    image: string;
    cnpj: string;
    category: string;
    name: string;
    email: string;
    password: string;
    signature: string;
    address: Address;
    key: string;
    createdAt?: Date;
    updatedAt?: Date;
}