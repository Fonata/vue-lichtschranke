// Hier stehen die Standardeinstellungen f�r alle TCP/IP-Anfragen
import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:5000/",
});