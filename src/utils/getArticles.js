import axios from "axios"

function getArticles(sortByQuery, orderQuery) {
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

export default getArticles