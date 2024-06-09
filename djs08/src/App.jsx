//App component
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home.jsx"
import About from "./About.jsx"


//create browser router
// Nest routes and the route element inside
// insert App to render

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>      
    </Routes>

  </BrowserRouter>
  )
}

export default App
