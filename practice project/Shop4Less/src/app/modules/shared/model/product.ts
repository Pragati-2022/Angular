export interface IProduct {
    id?: string;
    categoryId: number;
    productName: string;
    description: string;
    rating: string;
    price: number;
    isAvailable: boolean;
    color: string;
    reviews : number;
}