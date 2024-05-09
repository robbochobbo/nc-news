import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom"
import getArticleById from "../../utils/getArticleById"
import getCommentsByArticleId from "../../utils/getCommentsByArticleId"
import patchArticleVotes from "../../utils/patchArticleVotes"
import postComment from "../../utils/postComment"
import { CurrentUserContext } from "../../contexts/CurrentUser"
import Comments from "./CommentsList"

function IndividualArticlePage () {
    const {article_id} = useParams()
    const [individualArticle, setIndividualArticle] = useState([])
    const [comments, setComments] = useState([])
    const [currentVotes, setCurrentVotes] = useState(0)
    const [voteChange, setVoteChange] = useState(0)
    const [err, setErr] = useState(null)
    const [validComment, setValidComment] = useState(true)
    const [comment, setComment] = useState("")
    const [successfulComment, setSuccessfulComment] = useState(false)
    const [commentDeletedId, setCommentDeletedId] = useState(null)
    const currentUser = useContext(CurrentUserContext)

    useEffect(() => {
        getArticleById(article_id)
        .then((articleFromApi) => {
            setIndividualArticle(articleFromApi)
            setCurrentVotes(articleFromApi.votes)
        })
        .then(() => getCommentsByArticleId(article_id))
        .then((commentsFromApi) => {
            setComments(commentsFromApi)
            setCommentDeletedId(null)
            
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
    
    const handleInput = (e) => {
        setSuccessfulComment(false)
        setComment(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(comment && currentUser.currentUser){
            setValidComment(true)
            postComment(article_id, currentUser.currentUser, comment)
            .then((res) => {
                if (res.status === 201) {
                    setSuccessfulComment(true)
                    setComment("")
                    setErr(null)
                } 
                else {
                    return Promise.reject()
                } 
            })
            .catch((err) => {
                setSuccessfulComment(false)
                setValidComment(false)
                setErr("Something went wrong, please try again.")
            })
        }
        else if(!comment) {
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
                <label htmlFor="comment-body">comment:</label>
                <input id="comment-body" name="body" value={comment} onChange={handleInput}></input>
                <input type="submit" disabled={!currentUser.currentUser}></input>
                <p className={validComment ? "hidden" : ""}>Please provide comment</p>
                <p className={currentUser.currentUser ? "hidden" : ""}>You must be logged in to comment</p>
                <p className={successfulComment ? "" : "hidden"}>Comment post successful!</p>
                <p className={err ? "" : "hidden"}>Something went wrong, please try again.</p>
            </form>
            <></>
            <Comments comments={comments} commentDeletedId={commentDeletedId} setCommentDeletedId={setCommentDeletedId}/>
        </>
    )
    
}

export default IndividualArticlePage