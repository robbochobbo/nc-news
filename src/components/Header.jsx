import {Link} from "react-router-dom"
import { CurrentUserContext } from "../contexts/CurrentUser"
import { useContext } from "react"

function Header () {

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
        </>
    )
}

export default Header