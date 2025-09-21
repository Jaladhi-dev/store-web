import { createBrowserRouter } from "react-router-dom";
import { ProductsList } from "../../view/screens/productsList";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ProductsList />,
    }
]);

export default router;