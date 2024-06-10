import { Outlet } from "react-router-dom"
import Header from './Header'


//use outlet to control how the content of the rest of page
//is placed as oppossed to header/ extra content 

const Layout = () => {
  return (
    <>
      <Header/>
      <Outlet />
    </>
    
  )
}

export default Layout