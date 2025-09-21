import { useEffect, useState } from "react";
import type { Product } from "../models/product"
import { productRepository } from "../repository/productRepository";

export const getProductViewModel = (id: number) => {
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<String | null>(null);

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            try {
                const data = await productRepository.getProductById(id);
                setProduct(data);
            } catch (err: any) {
                console.error(err);
                setError(err.message || "Error fetching product");
            } finally {
                setLoading(false);
            }
        }
        getProduct();
    }, []);


    return {
        product,
        loading,
        error
    }
}