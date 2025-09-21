import { useEffect, useState } from "react";
import { productsListRepository } from "../repository/productsListRepository";
import type { Product } from "../models/product";
import { STATIC_STRINGS } from "../utils/constants/stringConstants";

export const useProductsListViewModel = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const data = await productsListRepository.getAllProducts();
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