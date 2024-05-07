import axios from "axios"

function getArticleById(article_id) {
        return axios
        .get(`https://robbies-articles-website.onrender.com/api/articles/${article_id}`)
        .then((response) => {
            return response.data.article[0]
        })
        .catch((err) => {
            console.log(err);
        })
    }

export default getArticleById