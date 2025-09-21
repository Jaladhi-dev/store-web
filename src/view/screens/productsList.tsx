import { Link } from "react-router-dom";
import { useProductsListViewModel } from "../../viewmodels/productsListViewModel";
import { ProductCard } from "../components/productCard";
import { API_ENDPOINTS } from "../../utils/constants/stringConstants";

export const ProductsList = () => {
    const { products, loading, error } = useProductsListViewModel();
    if (loading) return <div>Loading...</div>
    if (error) return <div>{error}</div>
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
            {products.map((product) => (
                <Link key={product.id} to={API_ENDPOINTS.PRODUCT_BY_ID(product.id)}>
                    <ProductCard key={product.id} product={product} />
                </Link>
            ))}
        </div>
    )
}