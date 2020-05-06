class CartService {
    client
    constructor() { }

    setup(axios) {
        this.client = axios
        this.client.setBaseURL(process.env.CART_URL)
        this.client.setHeader('Content-Type', 'application/json')
        this.client.setHeader('Accept', 'applciation/json')

    }

    addCart(user_id, product_id, quantity) {
        let payload = {
            user_id: user_id,
            product_id: product_id,
            quantity: quantity
        }
        return this.client.post('add_transaction', payload).then(
            response => {
                return response.data
            }
        )
    }

    getCart(user_id) {
        return this.client.get('users/' + user_id + '/current_transaction').then(
            response => {
                if (response.data.nessage == "There is no active transaction for this user")
                    return []
                return response.data
            }
        )
    }

    getHistory(user_id) {
        return this.client.get('users/' + user_id + '/history_transaction').then(
            response => {
                if (response.data.nessage == "There is no past transaction for this user")
                    return []
                return response.data
            }
        )
    }

    deleteProductFromCart(user_id, product_id) {
        let payload = {
            user_id: user_id,
            product_id: product_id
        }

        return this.client.delete('delete_transaction', payload).then(
            () => {
                return this.getCart(user_id)
            }
        )
    }
}

export const cartService = new CartService()