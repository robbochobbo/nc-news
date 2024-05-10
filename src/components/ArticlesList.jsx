import {useEffect, useState} from "react"
import ArticleCard from "./ArticleCard"
import {getArticles} from "../utils/api"
import { useParams, useSearchParams } from "react-router-dom"
import { Link } from "react-router-dom"
import ErrorPage from "./ErrorPage"

function ArticlesList () {  
    const [articles, setArticles] = useState([])
    const { topic } = useParams()
    const [error, setError] = useState(null)

    const[searchParams, setSearchParams] = useSearchParams()
    
    const sortByQuery = searchParams.get("sort_by")
    const orderQuery = searchParams.get("order")

    const setSortOrder = (direction) => {
        const newParams = new URLSearchParams(searchParams);
        newParams.set('order', direction);
        setSearchParams(newParams);
      }

    useEffect(() => {
        getArticles(sortByQuery, orderQuery)
        .then((response) => {
            setArticles(response)
        })
        .catch((err) => {
            setError(err)
        })
    }, [sortByQuery, orderQuery])

    


    return ( 
        <>
            {error ? <ErrorPage errorMessage={error}/> : 
            <div>
            <Link to="?sort_by=created_at"><button >sort by date</button></Link>
            <Link to="?sort_by=comment_count"><button >sort by comments</button></Link>
            <Link to="?sort_by=votes"><button >sort by votes</button></Link>
            <button onClick={() => setSortOrder("asc")}>asc</button>
            <button onClick={() => setSortOrder("desc")}>desc</button>
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
            </div>
        }
        </>
    )
}

export default ArticlesList