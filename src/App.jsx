import Header from "./components/Header"
import Router from "./components/Router"
import { CurrentUserProvider } from "./contexts/CurrentUser"



function App() {
  

  return (
    <CurrentUserProvider>
          <Header />
          <Router />
      </CurrentUserProvider>
  )
}

export default App
