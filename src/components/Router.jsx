import { Routes, Route } from 'react-router-dom';
import ArticlesList from "./ArticlesList"
import IndividualArticlePage from "./IndividualArticlePage"

function Router () {
    return (
            <Routes>
                <Route path="/" element={<ArticlesList/>}/>
                <Route path="articles">
                    <Route path=":article_id" element={<IndividualArticlePage/>}/>
                </Route>
            </ Routes>
    )
}

export default Router