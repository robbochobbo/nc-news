import axios from "axios"

function getArticles() {
        return axios
        .get(`https://robbies-articles-website.onrender.com/api/articles`)
        .then((response) => {
            return response.data.articles
        })
    }

export default getArticles