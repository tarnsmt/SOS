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
                auth.$storage.setLocalStorage('token', response.data.token)
                auth.$storage.setLocalStorage('refresh_token', response.data.refresh_token)
                return "success"
            }
        )
    }

    logout(auth) {
        this.setToken(false)
        auth.$stroage.setLocalStroage('token', null)
        auth.$stroage.setLocalStroage('refresh_token', null) 
    }
}

export const authService = new AuthService()