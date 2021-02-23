import axios from 'axios'

const API_URL = "https://short-magic-url.herokuapp.com/"
// const FRONTEND_URL ="http://localhost:3000/fetch/"
const FRONTEND_URL ="https://infallible-almeida-281df4.netlify.app/fetch/"


class MagicUrlService {
    

    generateUrl(content, content_type, expiry_time, user_name) {
        // console.log(FRONTEND_URL);
        var systemUrl = FRONTEND_URL
        return axios
            .post(API_URL + "submit", { content, content_type, expiry_time, user_name, systemUrl })
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
                // console.log(response.data)
                return response.data
            })
    }

}

export default new MagicUrlService()
