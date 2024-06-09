//App component
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./Home.jsx"
import About from "./About.jsx"


//create browser router
// Nest routes and the route element inside
// insert App to render

function App() {

  return (
    <BrowserRouter>
    <header>
          <Link to="/">#VANLIFE</Link>
          <nav>
            <Link to="/about">About</Link>
          </nav>
      </header>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>      
    </Routes>

  </BrowserRouter>
  )
}

export default App
