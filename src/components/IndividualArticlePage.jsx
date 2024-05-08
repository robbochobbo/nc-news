import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import getArticleById from "../utils/getArticleById"
import getCommentsByArticleId from "../utils/getCommentsByArticleId"
import patchArticleVotes from "../utils/patchArticleVotes"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import postComment from "../utils/postComment"


function IndividualArticlePage () {
    const {article_id} = useParams()
    const [individualArticle, setIndividualArticle] = useState([])
    const [comments, setComments] = useState([])
    const [currentVotes, setCurrentVotes] = useState(0)
    const [voteChange, setVoteChange] = useState(0)
    const [err, setErr] = useState(null)
    const [validComment, setValidComment] = useState(true)
    const [successfulComment, setSuccessfulComment] = useState(false)
    
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
            setSuccessfulComment(false)
            setErr("Something went wrong, please try again.");
        })
    }, [successfulComment])
    
    
    const handleVote = (vote) => {
        setCurrentVotes(currentVotes + vote)
        setVoteChange((currVoteChange) => currVoteChange + vote)
        setErr(null);
        patchArticleVotes(article_id, vote)
    }
    
    const commentTemplate = {
        username: "",
        body: ""
    } 
    const [comment, setComment] = useState(commentTemplate)

    const handleCommentInput = (e) => {
        setComment({...comment, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(comment.username && comment.body){
            setValidComment(true)
            setSuccessfulComment(true)
            postComment(article_id, comment)
        }
        else {
            return setValidComment(false)
        }
    }
    
    return(
        <>
            <img src={individualArticle.article_img_url} />   
            <p>{individualArticle.body}</p> 
            <p>votes: {currentVotes}</p>
            <button className="vote-button" id="upvote" disabled={voteChange === 1} onClick={() => handleVote(1)}>Upvote</button>
            <button className="vote-button" id="downvote" disabled={voteChange === -1} onClick={() => handleVote(-1)}>Downvote</button>

            <form onSubmit={handleSubmit}>
                <label htmlFor="comment-username">username:</label>
                <input id="comment-username"  name="username" onChange={handleCommentInput}></input>
                <label htmlFor="comment-body">comment:</label>
                <input id="comment-body" name="body" onChange={handleCommentInput}></input>
                <input type="submit"></input>
                <p className={validComment ? "hidden" : ""}>Please provide valid username and comment</p>
                <p className={successfulComment ? "" : "hidden"}>Comment post successful!</p>
            </form>

            <Card >
                <ListGroup as="ul">
                    {comments.map((comment) => {
                        return (<div className="comment" key={comment.comment_id}>
                        <ListGroup.Item as="li">
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