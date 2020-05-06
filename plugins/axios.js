export default function ({ $axios, $auth, redirect }) {
    $axios.onError(error => {
        if (error.response.status === 401) {
            let refresh_token = $auth.$storage.getLocalStorage('refresh_token')
            if (refresh_token !== null) {
                $axios.post("/refresh", { refresh_token: refresh_token }).then(
                    response => {
                        $axios.setToken(response.data.token, "Bearer")
                    },
                    error => {
                        $axios.setToken(false)
                        $auth.$storage.setLocalStorage('token', null)
                        $auth.$storage.setLocalStorage('refresh_token', null)
                        redirect('/')
                    }
                )
            }
            else {
                console.log("Error")
                redirect('/')
            }
        }
        console.log(error)
    })
}