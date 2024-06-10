import { Outlet } from "react-router-dom"
import Header from './Header'
import Footer from "./Footer"


//use outlet to control how the content of the rest of page
//is placed as oppossed to header/ extra content 

const Layout = () => {
  return (
    <div className="site-wrapper">
      <Header />
      <main>
          <Outlet />
      </main>
      <Footer />
  </div>
    
  )
}

export default Layout