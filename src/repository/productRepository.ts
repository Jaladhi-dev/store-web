import httpClient from "../api/httpClients";
import type { Product } from "../models/product";
import { API_ENDPOINTS } from "../utils/constants/stringConstants";

export const productRepository = {
    async getProductById(id: number): Promise<Product> {
        const response = await httpClient.get<Product>(API_ENDPOINTS.PRODUCT_BY_ID(id));
        console.log("Product by ID response:", response.data);
        return response.data;
    }
}