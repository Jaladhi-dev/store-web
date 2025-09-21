import httpClient from "../api/httpClients";
import type { Product } from "../models/product";
import { API_ENDPOINTS } from "../utils/constants/stringConstants";


export const productsListRepository = {
    async getAllProducts(): Promise<Product[]> {
        const response = await httpClient.get<Product[]>(API_ENDPOINTS.PRODUCTS);
        return response.data;
    },
}