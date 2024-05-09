import {useEffect, useState} from "react"
import ArticleCard from "./ArticleCard"
import getArticles from "../utils/getArticles"
import { useParams } from "react-router-dom"

function ArticlesList ({topics}) {  
    const [articles, setArticles] = useState([])
    
    const { topic } = useParams()

    useEffect(() => {
        getArticles()
        .then((response) => {
            setArticles(response)
        })
    }, [])

    return ( 
        <section>
            {articles.map((article) => {
                if(topic === article.topic){
                    return <ArticleCard article={article} key={article.article_id}/>
                }
                else if (!topic){
                    return <ArticleCard article={article} key={article.article_id}/>

                }
            })}
            
        </section>
    )
}

export default ArticlesList