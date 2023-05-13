import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '6459b8d0d2d746b9a2def99a78cfb3f7'
    }
});