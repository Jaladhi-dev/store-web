import { useProductViewModel } from "../../viewmodels/productViewModel";
import { ProductCard } from "../components/productCard";

export const ProductsList = () => {
    const { products, loading, error } = useProductViewModel();
    if (loading) return <div>Loading...</div>
    if (error) return <div>{error}</div>
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}