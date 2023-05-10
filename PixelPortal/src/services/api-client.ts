import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '6fd9ea1f2f114c36849df3990f20ab6d'
    }
});