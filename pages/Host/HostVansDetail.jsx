import React from "react"
import { useParams } from "react-router-dom"
import { Link , NavLink, Outlet} from "react-router-dom"

const HostVansDetail = () => {
    const [currentVan, setCurrentVan] = React.useState(null) 
    const { id } = useParams()  
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }


    React.useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setCurrentVan(data.vans))
    }, []) 

    if (!currentVan) {
        return <h1>Loading...</h1>
    }

// relative  ='path' when link is clicked the route will go back to a page relative or one hirearchy up
  return (
    <section>
        <Link
            to=".."
            relative="path"
            className="back-button"
        >&larr; <span>Back to all vans</span></Link>

        <div className="host-van-detail-layout-container">
            <div className="host-van-detail">
                <img src={currentVan.imageUrl} />
                <div className="host-van-detail-info-text">
                    <i
                        className={`van-type van-type-${currentVan.type}`}
                    >
                        {currentVan.type}
                    </i>
                    <h3>{currentVan.name}</h3>
                    <h4>${currentVan.price}/day</h4>
                </div>
            </div>
            <nav className="host-van-detail-nav">
                <NavLink
                    to="."
                    end
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Details
                </NavLink>

                <NavLink
                    to="pricing"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Pricing
                </NavLink>

                <NavLink
                    to="photos"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Photos
                </NavLink>

            </nav>

            <Outlet />
        </div>
    </section>
    )

}

export default HostVansDetail