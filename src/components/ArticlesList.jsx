import {useEffect, useState} from "react"
import axios from "axios"
import ArticleCard from "./ArticleCard"

function ArticlesList () {  
    const [articles, setArticles] = useState([])


    useEffect(() => {
        axios.get("https://robbies-articles-website.onrender.com/api/articles")
        .then((response) => {
            setArticles(response.data.articles)
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    return ( 
        <section className="articles">
            {articles.map((article) => {
                return <ArticleCard article={article} key={article.article_id}/>
            })}
            
        </section>
    )
}

export default ArticlesList