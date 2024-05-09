import axios from "axios"

function deleteComment(comment_id) {
        return axios
        .delete(`https://robbies-articles-website.onrender.com/api/comments/${comment_id}`)

    }

export default deleteComment