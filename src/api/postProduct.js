import axios from "./axios";

export const registerEmail = (emailData) => axios.post(`/product`, emailData); 