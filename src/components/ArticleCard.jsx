import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

function ArticleCard ({article}) {


    return (
        <Link to={`/articles/${article.article_id}`} >
                <Card className="article-card">
                    <Card.Img className="article-img"variant="top" src={article.article_img_url} />
                    <Card.Body>
                        <div className="article-title">
                            <Card.Title >{article.title}</Card.Title>
                        </div>
                        <div className="article-subtitles">
                            <Card.Subtitle >Author: {article.author}</Card.Subtitle>
                            <Card.Subtitle >Topic: {article.topic}</Card.Subtitle>
                            <Card.Subtitle >Votes: {article.votes}</Card.Subtitle>
                        </div>
                    </Card.Body>
                </Card>
        </Link>
    )
}

export default ArticleCard