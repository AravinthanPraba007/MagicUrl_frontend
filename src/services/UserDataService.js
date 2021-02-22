import axios from 'axios'

const API_URL = "https://short-magic-url.herokuapp.com/"

class UserDataService {

    signup(userName, password) {
        return axios
            .post(API_URL + "register", { userName, password })
    }

    login(user_name, password) {
        return axios
            .post(API_URL + "signIn", { user_name, password })
            .then((response) => {
                console.log(response.data)
                return response.data
            })
    }

}

export default new UserDataService()
