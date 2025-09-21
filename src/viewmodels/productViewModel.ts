import { useEffect, useState } from "react";
import { productRepository } from "../repository/productRepository";
import type { Product } from "../models/product";
import { STATIC_STRINGS } from "../utils/constants/stringConstants";

export const useProductViewModel = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const data = await productRepository.getAllProducts();
                setProducts(data);
            } catch (err: any) {
                setError(err.message || STATIC_STRINGS.FETCH_PRODUCTS_ERROR);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, []);

    return {
        products,
        loading,
        error
    }
}