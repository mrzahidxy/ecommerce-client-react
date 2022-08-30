import axios from "axios";

const BASE_URL = "https://ecommerce-mern-api.vercel.app/api/";
const TOKEN = "";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const privateRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    token: `Bearer ${TOKEN}`,
  },
});
