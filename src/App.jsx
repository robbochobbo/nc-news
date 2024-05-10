import Header from "./components/Header"
import Router from "./components/Router"
import { CurrentUserProvider } from "./contexts/CurrentUser"



function App() {
  

  return (
    <CurrentUserProvider>
        <div className="container">
          <Header />
          <div className="content">
            <Router />
          </div>
        </div>
      </CurrentUserProvider>
  )
}

export default App
