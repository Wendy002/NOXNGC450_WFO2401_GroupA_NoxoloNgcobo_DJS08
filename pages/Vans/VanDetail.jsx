import React from 'react'
import {Link, useParams,useLocation } from 'react-router-dom'
import { getVan } from "../../api"

const VanDetail = () => {
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  const {id} = useParams()    
  const location = useLocation()        //use params to fetch each vans id
  const [van, setVan] = React.useState(null)   //init state to set van info              
  
  React.useEffect(() => {
    async function loadVans() {
      setLoading(true)
      try {
          const data = await getVan(id)
          setVan(data)
      } catch (err) {
          setError(err)
      } finally {
          setLoading(false)
      }
    }
    loadVans()             // set each van page with info
  }, [id])
  
  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>
  }


  const search = location.state?.search || "" // back up variable
  const type = location.state?.type || "all"  
  // check if there is a van then displays or else show....loading..
  // @returns image , type,price, description and action button to rent van
  return (
    <div className="van-detail-container">
       <Link
                to={`..${search}`}
                relative="path"
                className="back-button"
            >&larr; <span>Back to {type} vans</span></Link>
    {van ? (
        <div className="van-detail">
            <img src={van.imageUrl} />
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
            <h2>{van.name}</h2>
            <p className="van-price"><span>${van.price}</span>/day</p>
            <p>{van.description}</p>
            <button className="link-button">Rent this van</button>
        </div>
    ) : <h2>Loading...</h2>}
</div>   
  )
}

export default VanDetail