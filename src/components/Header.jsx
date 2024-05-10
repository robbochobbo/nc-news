import {Link} from "react-router-dom"
import { CurrentUserContext } from "../contexts/CurrentUser"
import { useContext, useEffect, useState } from "react"
import Nav from "./Nav"
import {getTopics} from "../utils/api"

function Header () {
    const {currentUser, setCurrentUser} = useContext(CurrentUserContext)

    const [topics, setTopics] = useState([])

    useEffect(()=> {
        getTopics()
        .then((response) => {
            setTopics(response)
        })
        .catch((err) => {
            console.log(err);
        })
        
    }, [])
    
    const handleClick = () => {
        setCurrentUser(null)
    }


    return(
        <>
            <Link to="/login">
                <button disabled={currentUser !== null}>{currentUser ? `User: ${currentUser}` : "Login"}</button>
            </Link>
                <button className={currentUser ? "" : "hidden"} onClick={handleClick}>Logout</button>
            <Link to="/">
                <h1> NC NEWS</h1>
            </Link >
            <Nav topics={topics}/>
        </>
    )
}

export default Header