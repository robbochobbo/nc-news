import axios from "axios"

function postComment(article_id, username, body) {

        const commentObject = {
            username,
            body
        }
        return axios
        .post(`https://robbies-articles-website.onrender.com/api/articles/${article_id}/comments`, commentObject)
    }

export default postComment