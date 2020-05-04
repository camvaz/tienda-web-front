import { API_ENDPOINT } from "../constants/endpoint";

export const returnImg = img => {
    return `${API_ENDPOINT}/img${img}`;
};
