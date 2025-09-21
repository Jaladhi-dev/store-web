import { createBrowserRouter } from "react-router-dom";
import { ProductsList } from "../view/screens/productsList";
import { GetProduct } from "../view/screens/product";
import { ROUTES } from "../utils/constants/stringConstants";

const router = createBrowserRouter([
    {
        path: '/',
        element: <ProductsList />,
    },
    {
        path: ROUTES.PRODUCT_BY_ID,
        element: <GetProduct />,
    }
]);

export default router;