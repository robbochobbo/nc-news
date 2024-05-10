import axios from "axios"

export function deleteComment(comment_id) {
        return axios
        .delete(`https://robbies-articles-website.onrender.com/api/comments/${comment_id}`)

    }

export function getArticleById(article_id) {
        return axios
        .get(`https://robbies-articles-website.onrender.com/api/articles/${article_id}`)
        .then((response) => {
            return response.data.article[0]
        })
    }

export function getArticles(sortByQuery, orderQuery) {
        let urlString = "https://robbies-articles-website.onrender.com/api/articles"
        if(sortByQuery)(
            urlString += `?sort_by=${sortByQuery}`
        )
        if(sortByQuery && orderQuery)(
            urlString += `&order=${orderQuery}`
        )

        return axios
        .get(urlString)
        .then((response) => {
            return response.data.articles
        })
    }

export function getCommentsByArticleId(article_id) {
        return axios
        .get(`https://robbies-articles-website.onrender.com/api/articles/${article_id}/comments`)
        .then((response) => {
            return response.data.comments
        })
    }

export function getTopics() {
        return axios
        .get(`https://robbies-articles-website.onrender.com/api/topics`)
        .then((response) => {
            return response.data
        })
    }

export function getUserByUsername(username) {
        return axios
        .get(`https://robbies-articles-website.onrender.com/api/users/${username}`)
        .then((response) => {
            return response.data
        })
    }

export function patchArticleVotes(article_id, vote) {

    const voteObject = {inc_votes: vote}

        return axios
        .patch(`https://robbies-articles-website.onrender.com/api/articles/${article_id}`, voteObject)
    }


export function postComment(article_id, username, body) {

        const commentObject = {
            username,
            body
        }
        return axios
        .post(`https://robbies-articles-website.onrender.com/api/articles/${article_id}/comments`, commentObject)
    }
