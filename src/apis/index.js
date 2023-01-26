import axios from "axios";

export default axios.create({
    baseURL: "https://to-do-app-backend.vercel.app"
});