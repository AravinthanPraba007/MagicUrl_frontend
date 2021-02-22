import axios from 'axios'

const API_URL = "https://short-magic-url.herokuapp.com/"

class UserDataService {

    signup(userName, password) {
        return axios
            .post(API_URL + "register", { userName, password })
    }

}

export default new UserDataService()
