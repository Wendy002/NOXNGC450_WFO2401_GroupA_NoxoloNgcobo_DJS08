//App component
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./Home.jsx"
import About from "./About.jsx"
import Vans from "./Vans.jsx"
import VanDetail from "./VanDetail.jsx"
import Layout from "../Layout-components/Layout.jsx"

import '../server.js'

//create browser router
// Nest routes and the route element inside
// insert App to render

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>   
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetail/>} />  
      </Route>
    </Routes>

  </BrowserRouter>
  )
}

export default App
