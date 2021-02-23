import axios from 'axios'

const API_URL = "https://short-magic-url.herokuapp.com/"

class MagicUrlService {

    generateUrl(content, content_type, expiry_time, user_name) {
        return axios
            .post(API_URL + "submit", { content, content_type, expiry_time, user_name })
    }

    fetchContent(magicId) {
        return axios
            .get(API_URL + "fetch/"+magicId)
            .then((response) => {
                console.log(response.data)
                return response.data
            })
    }

    fetchUserMagicUrls(username) {
        return axios
            .post(API_URL + "magicUrls",{ username })
            .then((response) => {
                console.log(response.data)
                return response.data
            })
    }

}

export default new MagicUrlService()
