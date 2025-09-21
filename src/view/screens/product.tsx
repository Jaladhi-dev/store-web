import { useParams } from "react-router-dom";
import { getProductViewModel } from "../../viewmodels/productViewModel";

export const GetProduct = () => {
    const { id } = useParams();
    const productId = Number(id);
    const { product, loading, error } = getProductViewModel(productId);
    if (loading) return <div>Loading...</div>
    if (error) return <div>{error}</div>
    if (!product) return <div>No product found</div>
    return (
        <div className="flex p-6 border rounded-lg shadow-lg max-w-4xl mx-auto">
            {/* Image Section (Left Column) */}
            <div className="w-1/3 flex-shrink-0 mr-6">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-auto object-cover rounded"
                />
            </div>

            {/* Details Section (Right Column) */}
            <div className="w-2/3 flex-grow">
                <h1 className="text-2xl font-bold mb-2">
                    {product.title}
                </h1>
                <p className="text-gray-600 mb-4">
                    {product.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                    <p className="text-3xl font-bold text-gray-800">
                        ${product.price}
                    </p>
                    <div className="text-sm text-gray-500">
                        Rating: {product.rating.rate} ({product.rating.count} reviews)
                    </div>
                </div>
                <p className="text-sm text-gray-500 capitalize">
                    Category: {product.category}
                </p>
            </div>
        </div>
    )
}