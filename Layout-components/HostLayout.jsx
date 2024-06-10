import {Outlet, NavLink} from "react-router-dom"
// create nav for dashboard, Income, Reviews

const HostLayout = () => {
  return (
    <>
      <nav className="host-nav">
          <NavLink to="/host"  style={({ isActive }) => isActive ? activeStyles : null}>Dashboard</NavLink>
          <NavLink to="/host/income"  style={({ isActive }) => isActive ? activeStyles : null}>Income</NavLink>
          <NavLink to="/host/reviews"  style={({ isActive }) => isActive ? activeStyles : null}>Reviews</NavLink>
      </nav>
      <Outlet />
  </>
  )
}

export default HostLayout