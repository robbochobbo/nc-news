import { Routes, Route } from 'react-router-dom';
import ArticlesList from "./ArticlesList"

function Router () {
    return (
            <Routes>
                <Route path="/" element={<ArticlesList/>}/>
            </ Routes>
    )
}

export default Router