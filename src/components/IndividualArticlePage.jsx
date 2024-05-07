import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import getArticleById from "../utils/getArticleById"
import getCommentsByArticleId from "../utils/getCommentsByArticleId"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';

function IndividualArticlePage () {
    const {article_id} = useParams()
    const [individualArticle, setIndividualArticle] = useState([])
    const [comments, setComments] = useState([])
    
    useEffect(() => {
        getArticleById(article_id)
        .then((articleFromApi) => {
            setIndividualArticle(articleFromApi)
        })
        .then(() => getCommentsByArticleId(article_id))
        .then((commentsFromApi) => {
            setComments(commentsFromApi)
        })
    }, [])

    return(
        <>
            <img src={individualArticle.article_img_url} />   
            <p>{individualArticle.body}</p> 

            <Card >
                <ListGroup as="ol" numbered>
                    {comments.map((comment) => {
                        return (
                        <ListGroup.Item as="li" className="comment-box" key={comment.comment_id}>
                            <div className="comment-body">
                                <div className="comment-author">{comment.author} says: </div>
                                {comment.body}
                            </div>
                            <Badge bg="primary" pill>votes: {comment.votes}</Badge>
                        </ListGroup.Item>
                        )
                    })}
                </ListGroup>
            </Card>
        </>


    )
    
}

export default IndividualArticlePage