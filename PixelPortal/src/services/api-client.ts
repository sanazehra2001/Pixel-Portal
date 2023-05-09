import axios from "axios";

export default axios.create({
    params: {
        baseURL: 'https://api.rawg.io/api',
        key: '6fd9ea1f2f114c36849df3990f20ab6d'
    }
});