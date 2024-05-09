import Header from "./components/Header"
import Router from "./components/Router"
import { CurrentUserProvider } from "./contexts/CurrentUser"
import { useState, useEffect } from "react"
import getTopics from "./utils/getTopics"



function App() {
  const [topics, setTopics] = useState([])

  useEffect(()=> {
      getTopics()
      .then((response) => {
          setTopics(response)
      })
      
  }, [])

  return (
    <>
      <CurrentUserProvider>
        <Header topics={topics} />
        <Router topics={topics} />
      </CurrentUserProvider>
    </>
  )
}

export default App
