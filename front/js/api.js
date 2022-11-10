const API_URL = "http://localhost:3000/api/products";

const api = {

    async fetchProducts() {
        const reponse = await fetch(API_URL);

        return reponse.json();
    },

    async fetchProduct(id) {
        const response = await fetch(API_URL + '/' + id);
        return response.json();
    }
}


