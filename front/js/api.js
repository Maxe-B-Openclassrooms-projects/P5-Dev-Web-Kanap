const API_URL = "http://localhost:3000/api/products";

const api = {
    
    async fetchProducts() {
        const reponse = await fetch(API_URL); 
        
        return reponse.json();
    }
}
