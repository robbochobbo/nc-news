import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import getArticleById from "../utils/getArticleById"
import getCommentsByArticleId from "../utils/getCommentsByArticleId"
import patchArticleVotes from "../utils/patchArticleVotes"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';


function IndividualArticlePage () {
    const {article_id} = useParams()
    const [individualArticle, setIndividualArticle] = useState([])
    const [comments, setComments] = useState([])
    const [currentVotes, setCurrentVotes] = useState(0)
    const [err, setErr] = useState(null)
    
    useEffect(() => {
        getArticleById(article_id)
        .then((articleFromApi) => {
            setIndividualArticle(articleFromApi)
            setCurrentVotes(articleFromApi.votes)
        })
        .then(() => getCommentsByArticleId(article_id))
        .then((commentsFromApi) => {
            setComments(commentsFromApi)
        })
        .catch((err) => {
            setCurrentVotes(currentVotes - vote)
            setErr("Something went wrong, please try again.");
        })
    }, [])
    
    
    const handleVote = (vote) => {
        setCurrentVotes(currentVotes + vote)
        setErr(null);
        patchArticleVotes(article_id, vote)
    }

    return(
        <>
            <img src={individualArticle.article_img_url} />   
            <p>{individualArticle.body}</p> 
            <p>votes: {currentVotes}</p>
            <button className="vote-button" id="upvote" onClick={() => handleVote(1)}>Upvote</button>
            <button className="vote-button" id="downvote" onClick={() => handleVote(-1)}>Downvote</button>

            <Card >
                <ListGroup as="ul">
                    {comments.map((comment) => {
                        return (<div className="comment">
                        <ListGroup.Item as="li" key={comment.comment_id}>
                            <div className="comment-body">
                                <div className="comment-author">{comment.author} says: </div>
                                {comment.body}
                            </div>
                            <Badge bg="primary" pill>votes: {comment.votes}</Badge>
                        </ListGroup.Item>
                            </div>
                        )
                    })}
                </ListGroup>
            </Card>
        </>


    )
    
}

export default IndividualArticlePage