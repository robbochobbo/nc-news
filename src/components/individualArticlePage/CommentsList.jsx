import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import { CurrentUserContext } from '../../contexts/CurrentUser';
import { useContext} from 'react';
import {deleteComment} from '../../utils/api';

function Comments({comments, commentDeletedId, setCommentDeletedId}) {
    const {currentUser} = useContext(CurrentUserContext)

    const handleClick = (comment_id) => {
        
        deleteComment(comment_id)
        .then((response) => {
            if(response.status === 204){
                setCommentDeletedId(comment_id)
            }
        })
    }

    function DeleteButton({comment}) {
        if(currentUser === comment.author){
            return <button onClick={() => handleClick(comment.comment_id)}>X</button>
        }

    }

    return (
        <Card >
            <ListGroup as="ul" className='comment-list'>
                {comments.map((comment) => (
                    commentDeletedId === comment.comment_id? 
                    <p key={comment.comment_id}>deleted!</p> :
                    <div className="comment" key={comment.comment_id}>
                        <DeleteButton comment={comment}/>
                        <ListGroup.Item as="li">
                                <div className="comment-author">{comment.author} says: </div>
                            <div>
                                {comment.body}
                            </div>
                            <Badge className="comment-votes" bg="primary" pill>votes: {comment.votes}</Badge>
                        </ListGroup.Item>
                    </div>
                ))
                }
            </ListGroup>
        </Card>
    )
}

export default Comments