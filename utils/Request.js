import axios from "axios";

const service = axios.create({
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
    }
})
export default service;