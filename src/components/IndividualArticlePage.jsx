import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

function IndividualArticlePage () {
    const {article_id} = useParams()
    const [individualArticle, setIndividualArticle] = useState([])

    useEffect(() => {
        axios.get(`https://robbies-articles-website.onrender.com/api/articles/${article_id}`)
        .then((response) => {
            setIndividualArticle(response.data.article[0])
        })
    }, [])

    return(
        <>
            <img src={individualArticle.article_img_url} />   
            <p>{individualArticle.body}</p> 
        </>


    )
    
}

export default IndividualArticlePage