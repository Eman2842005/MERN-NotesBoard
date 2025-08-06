import axios from "axios";
var BASE_URL;
if(import.meta.env.MODE==="development" )
BASE_URL="http://localhost:5001";

const api= axios.create({
   baseURL:BASE_URL
});
export default api;