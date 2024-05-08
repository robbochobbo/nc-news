import axios from "axios"

function getUserByUsername(username) {
        return axios
        .get(`https://robbies-articles-website.onrender.com/api/users/${username}`)
        .then((response) => {
            return response.data
        })
    }

export default getUserByUsername