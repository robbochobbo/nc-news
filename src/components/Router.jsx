import { Routes, Route } from 'react-router-dom';
import ArticlesList from "./ArticlesList"
import IndividualArticlePage from "./individualArticlePage/IndividualArticlePage"
import Login from './Login';

function Router ({topics}) {

    return (
            <Routes>
                <Route path="/" element={<ArticlesList/>}/>
                <Route path="/:topic" element={<ArticlesList topics={topics}/>}/>
                <Route path="articles">
                    <Route path=":article_id" element={<IndividualArticlePage/>}/>
                </Route>
                <Route path="/login" element={<Login/>}/>
            </ Routes>
    )
}

export default Router