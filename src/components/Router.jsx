import { Routes, Route } from 'react-router-dom';
import ArticlesList from "./ArticlesList"

function Router () {
    return (
        <div>
            <Routes>
                <Route path="/" element={<ArticlesList/>}/>
            </ Routes>
        </div>
    )
}

export default Router