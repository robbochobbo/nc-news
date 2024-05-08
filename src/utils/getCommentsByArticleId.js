import axios from "axios"

function getCommentsByArticleId(article_id) {
        return axios
        .get(`https://robbies-articles-website.onrender.com/api/articles/${article_id}/comments`)
        .then((response) => {
            return response.data.comments
        })
    }

export default getCommentsByArticleId