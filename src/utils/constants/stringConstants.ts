export const API_BASE_URL = "https://fakestoreapi.com/";

export const API_ENDPOINTS = {
    PRODUCTS: "/products",
    PRODUCT_BY_ID: (id: number) => `/products/${id}`,
}

export const STATIC_STRINGS = {
    FETCH_PRODUCTS_ERROR: "Failed to fetch products",
    NO_RESPONSE_ERROR: "No response from server!",
    GENERIC_ERROR: "Something went wrong!"
}