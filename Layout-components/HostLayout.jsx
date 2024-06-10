import {Outlet, NavLink} from "react-router-dom"
// create nav for dashboard, Income, Reviews
// use navlink to show active page
// use 'end' to stop matching of active links
const HostLayout = () => {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
}
  return (
    <>
      <nav className="host-nav">
          <NavLink to="/host" end style={({ isActive }) => isActive ? activeStyles : null}>Dashboard</NavLink>
          <NavLink to="/host/income"  style={({ isActive }) => isActive ? activeStyles : null}>Income</NavLink>
          <NavLink to="/host/reviews"  style={({ isActive }) => isActive ? activeStyles : null}>Reviews</NavLink>
      </nav>
      <Outlet />
  </>
  )
}

export default HostLayout