import { CurrentUserContext } from "../contexts/CurrentUser"
import { useContext, useState } from "react"
import {getUserByUsername} from "../utils/api"

function Login (){
    const [usernameInput, setUsernameInput] = useState("")
    const {currentUser, setCurrentUser} = useContext(CurrentUserContext)
    const [err, setErr] = useState(null)

    const handleInput = (e) => {
        setUsernameInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        getUserByUsername(usernameInput)
        .then((user) => {
                setCurrentUser(user.username)
                setUsernameInput("")
                setErr(null)
        })
        .catch((err) => {
            setErr("Username does not exist")
        })
    }

   

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="login-username">Login:</label>
            <input id="login-username" placeholder="please enter your username..." onChange={handleInput} value={usernameInput}></input>
            <input disabled={currentUser !== null || !usernameInput} type="submit"></input>
            <p className={err ? "" : "hidden"}>{err}</p>
            <p className={currentUser ? "" : "hidden"}>{`Welcome, ${currentUser}!`}</p>
        </form>
    )
}

export default Login