export default function ({ $axios, $auth, redirect }) {
    $axios.onError(error => {
        if (error.response.status === 401) {
            let refresh_token = $auth.$stroage.getLocalStroage('refresh_token')
            if (refresh_token !== null) {
                $axios.post("/refresh", { refresh_token: refresh_token }).then(
                    response => {
                        $axios.setToken(response.data.token, "Bearer")
                    },
                    error => {
                        $axios.setToken(false)
                        $auth.$stroage.setLocalStroage('token', null)
                        $auth.$stroage.setLocalStroage('refresh_token', null)
                        redirect('/')
                    }
                )
            }
            else {
                console.log("Error")
                redirect('/')
            }
        }
        console.log("Other error")
    })
}