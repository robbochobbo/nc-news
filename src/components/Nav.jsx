import { Link } from "react-router-dom"


function Nav ({topics}) {
    
    return (
        <>  
            <Link className="nav-button" to="/">home</Link>
            {topics.map((topic) => {
                return(
                        <Link className="nav-button" to={topic.slug} key={topic.slug}>{topic.slug}</Link>
                ) 
            })}
        </>
    )
}

export default Nav