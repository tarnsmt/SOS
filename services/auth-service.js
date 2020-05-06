import { cartService } from "./cart-service"

class AuthService {
        client
        constructor() { }

        setup(axios) {
            this.client = axios
            this.client.setBaseURL(process.env.AUTH_URL)
            this.client.setHeader('Content-Type', 'application/json')
            this.client.setHeader('Accept', 'applciation/json')

        }

        login(auth, data) {
            return this.client.post('authenticate', data).then(
                response => {
                    this.client.setToken(response.data.token, "Bearer")
                    auth.$storage.setLocalStorage('user_id', response.data.user_id)
                    auth.$storage.setLocalStorage('role', response.data.role)
                    auth.$storage.setLocalStorage('token', response.data.token)
                    auth.$storage.setLocalStorage('refresh_token', response.data.refresh_token)
                    cartService.setup(this.client)
                    return "success"
                }
            )
        }

        logout(auth) {
            this.setToken(false)
            auth.$storage.setLocalStorage('token', null)
            auth.$storage.setLocalStorage('refresh_token', null)
            auth.$storage.setLocalStorage('user_id', null)
            auth.$storage.setLocalStorage('role', null)
        }
    }

export const authService = new AuthService()