import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';

function Comments({comments}) {
    return (
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
    )
}

export default Comments