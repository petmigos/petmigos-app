import { Address } from "./address";

export interface Company{
    cnpj: string;
    category: string;
    name: string;
    email: string;
    password: string;
    signature: string;
    address: Address;
}