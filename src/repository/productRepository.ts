import httpClient from "../api/httpClients";
import type { Product } from "../models/product";


export const productRepository = {
    async getAllProducts(): Promise<Product[]> {
        const response = await httpClient.get<Product[]>("/products");
        return response.data;
    },

    async getProductById(id: number): Promise<Product> {
        const response = await httpClient.get<Product>(`/products/${id}`);
        return response.data;
    }
}