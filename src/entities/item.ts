export interface Item{
    _id?: string,
    name: string,
    description: string,
    price: number,
    category: string,
    image: string,
    quantity: number,
    createdAt?: Date,
    updatedAt?: Date,
}