import axios from "axios"

function postComment(article_id, comment) {
        return axios
        .post(`https://robbies-articles-website.onrender.com/api/articles/${article_id}/comments`, comment)
    }

export default postComment