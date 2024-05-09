import axios from "axios"

function getTopics() {
        return axios
        .get(`https://robbies-articles-website.onrender.com/api/topics`)
        .then((response) => {
            return response.data
        })
    }

export default getTopics