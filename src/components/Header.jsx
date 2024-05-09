import {Link} from "react-router-dom"
import { CurrentUserContext } from "../contexts/CurrentUser"
import { useContext } from "react"
import Nav from "./Nav"

function Header ({topics}) {

    const {currentUser, setCurrentUser} = useContext(CurrentUserContext)
    
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