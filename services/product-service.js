class ProductService {
    client
    constructor() { }

    setup(axios) {
        this.client = axios
        this.client.setBaseURL(process.env.PRODUCT_URL)
        this.client.setHeader('Content-Type', 'application/json')
        this.client.setHeader('Accept', 'applciation/json')
    }

    getAllProducts() {
        return this.client.get('products').then(
            response => {
                return response.data
            }
        )
    }

    getProductsById(product_id) {
        return this.client.get('products/' + product_id).then(
            response => {
                return response.data
            }
        )
    }

    checkout(product_id,quantity) {
        let payload = { quantity: quantity }
        return this.client.post('products/' + product_id, payload).then(
            response => {
                return response.data
            }
        )
    }

    getProductsByCategoryId(categorie_id) {
        return this.client.get('categories/' + categorie_id + "/products").then(
            response => {
                return response.data
            }
        )
    }

    getProductsByUserId(user_id) {
        return this.client.get('users/' + user_id + '/products').then(
            response => {
                return response.data
            }
        )
    }

    createProduct(user_id, createProductPayload) {
        return this.client.post('users/' + user_id + '/products', createProductPayload).then(
            response => {
                return response.data
            }
        )
    }

    updateProduct(user_id, product_id, updateProductPayload) {
        return this.client.put('users/' + user_id + '/products/' + product_id, updateProductPayload).then(
            response => {
                return response.data
            }
        )
    }

    deleteProduct(user_id, product_id) {
        return this.client.delete('users/' + user_id + '/products/' + product_id).then(
            response => {
                return response.data
            }
        )
    }

    getAllCategory() {
        return this.client.get('categories').then(
            response => {
                return response.data
            }
        )
    }
}

export const productService = new ProductService()