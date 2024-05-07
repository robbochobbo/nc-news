import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

function ArticleCard ({article}) {
    return (
        <Card className="article">
            <Link to={`articles/${article.article_id}`} >
                <Card.Img variant="top" src={article.article_img_url} />
            </Link>
          <Card.Body>
            <Card.Title className="article-title">{article.title}</Card.Title>
            <Card.Subtitle >Author: {article.author}</Card.Subtitle>
            <Card.Subtitle >Topic: {article.topic}</Card.Subtitle>
            <Card.Subtitle >Votes: {article.votes}</Card.Subtitle>
          </Card.Body>
        </Card>
    )
}

export default ArticleCard