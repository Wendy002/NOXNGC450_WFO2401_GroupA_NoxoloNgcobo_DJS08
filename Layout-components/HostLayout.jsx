import {Outlet, NavLink} from "react-router-dom"
// create nav for dashboard, Income, Reviews

const HostLayout = () => {
  return (
    <>
      <nav className="host-nav">
          <NavLink to="/host">Dashboard</NavLink>
          <NavLink to="/host/income">Income</NavLink>
          <NavLink to="/host/reviews">Reviews</NavLink>
      </nav>
      <Outlet />
  </>
  )
}

export default HostLayout