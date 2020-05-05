class CartService {
    client
    constructor() { }

    setup(axios) {
        this.client = axios
        this.client.setBaseURL(process.env.CART_URL)
        this.client.setHeader('Content-Type', 'application/json')
        this.client.setHeader('Accept', 'applciation/json')
    }

}

export const CartService = new CartService()