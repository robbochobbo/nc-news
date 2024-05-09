import { Link } from "react-router-dom"


function Nav ({topics}) {
    
    return (
        <>  
            <Link to="/">
                <button>home</button>
            </Link>
            {topics.map((topic) => {
                return(
                        <Link to={topic.slug} key={topic.slug}>
                            <button>{topic.slug}</button>
                        </Link>
                ) 

            })}
        </>
    )
}

export default Nav