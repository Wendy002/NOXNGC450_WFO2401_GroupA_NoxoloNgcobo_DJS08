//App component
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./Home.jsx"
import About from "./About.jsx"
import Vans from "./Vans.jsx"
import VanDetail from "./VanDetail.jsx"
import '../server.js'

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
            <Link to="/vans">Vans</Link>
          </nav>
    </header>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>   
      <Route path="/vans" element={<Vans />} />
      <Route path="/vans/:id" element={<VanDetail/>} />  
    </Routes>

  </BrowserRouter>
  )
}

export default App
