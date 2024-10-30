import axios from "axios";

export default class PostService {
    static async getAll(limit = 10, page = 1) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users', {
            params: {
                _limit: limit,
                _page: page
            }
        })
        return response;
    }


    static async getById(id) {
        // console.log(id)
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/' + id)
        return response;
    }

    static async getPostsByUserId(id) {
        // console.log(id)
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        return response;
    }
};