import type { Product } from "../../models/product";

interface Props {
    product: Product
}

export const ProductCard = ({ product }: Props) => {
    return (
        <div className="border rounded-xl shadow p-4 hover:shadow-lg transition">
            <img src={product.image} alt={product.title} className="h-40 mx-auto" />
            <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
            <p className="text-gray-500 text-sm line-clamp-2">{product.description}</p>
            <p className="text-blue-600 font-bold mt-2">${product.price}</p>
        </div>
    )
}