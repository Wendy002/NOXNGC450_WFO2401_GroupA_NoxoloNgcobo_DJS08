import { Link, Outlet} from "react-router-dom"
// create nav for dashboard, Income, Reviews

const HostLayout = () => {
  return (
    <>
      <nav className="host-nav">
          <Link to="/host">Dashboard</Link>
          <Link to="/host/income">Income</Link>
          <Link to="/host/reviews">Reviews</Link>
      </nav>
      <Outlet />
  </>
  )
}

export default HostLayout