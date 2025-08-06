import axios from "axios";
let BASE_URL;
if (import.meta.env.MODE === "development") {
  BASE_URL = "http://localhost:5001";
} else {
  BASE_URL = "https://notes-board-n65z.onrender.com";
}

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true
});
export default api;
