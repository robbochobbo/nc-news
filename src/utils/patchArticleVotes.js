import axios from "axios"

function patchArticleVotes(article_id, vote) {

    const voteObject = {inc_votes: vote}

        return axios
        .patch(`https://robbies-articles-website.onrender.com/api/articles/${article_id}`, voteObject)
    }

export default patchArticleVotes