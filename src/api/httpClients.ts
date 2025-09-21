import axios from "axios";
import { API_BASE_URL, STATIC_STRINGS } from "../utils/constants/stringConstants";

const httpClient = axios.create({ baseURL: API_BASE_URL, timeout: 10000, });

httpClient.interceptors.response.use(
    (response) => response,
    (error) => {
        let message = STATIC_STRINGS.GENERIC_ERROR;

        if (error.response) {
            message = error.response.data?.message || `Error ${error.response.status}`;
        } else if (error.request) {
            message = STATIC_STRINGS.NO_RESPONSE_ERROR;
        } else {
            message = error.message;
        }

        return Promise.reject(new Error(message));
    }
);

export default httpClient;