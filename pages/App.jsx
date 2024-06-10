//App component
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Home.jsx"
import About from "./About.jsx"
import Vans from "./Vans/Vans.jsx"
import VanDetail from "./Vans/VanDetail.jsx"
import Layout from "../Layout-components/Layout.jsx"
import Dashboard from "./Host/Dashboard.jsx"
import Income from "./Host/Income.jsx"
import Reviews from "./Host/Reviews.jsx"
import HostLayout from "../Layout-components/HostLayout.jsx"
import HostVans from "./Host/HostVans.jsx"
import HostVansDetail from "./Host/HostVansDetail.jsx"
import '../server.js'
import HostVansInfo from "./Host/HostVansInfo.jsx"
import HostVansPhotos from "./Host/HostVansPhotos.jsx"
import HostVansPricing from "./Host/HostVansPricing.jsx"

//create browser router
// Nest routes and the route element inside
// insert App to render
// Wrapper route that is the layout that will always display if navigating throug all pages

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>   
        <Route path="vans" element={<Vans />} />
        <Route path="vans/:id" element={<VanDetail/>} /> 

        <Route path="host" element={<HostLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="vans" element={<HostVans />} />
          <Route path="vans/:id" element={<HostVansDetail />}>
            <Route index element={<HostVansInfo />} />
            <Route path="pricing" element={<HostVansPricing />} />
            <Route path="photos" element={<HostVansPhotos />} />
          </Route>
        </Route>
        
      </Route>
    </Routes>

  </BrowserRouter>
  )
}

export default App
