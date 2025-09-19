import { useEffect, useState } from "react";
import { productRepository } from "../repository/productRepository";
import type { Product } from "../models/product";

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
            } catch (err) {
                setError("Failed to fetch products");
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