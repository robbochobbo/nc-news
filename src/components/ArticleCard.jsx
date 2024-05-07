

function ArticleCard ({article}) {
    return (<article>
                <img src={article.article_img_url} alt={article.title} />
                    <h2>{article.title} </h2>
                <ul>
                    <li>
                        Author: {article.author}
                    </li>
                    <li>
                        Topic: {article.topic}
                    </li>
                    <li>
                        Votes: {article.votes}
                    </li>
                </ul>
            </ article>
    )
}

export default ArticleCard