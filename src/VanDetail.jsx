import React from 'react'
import { useParams } from 'react-router-dom'

const VanDetail = () => {
  const params = useParams()            //use params to fetch each vans id
  const [van, setVan] = React.useState(null)   //init state to set van info              
  
  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
        .then(res => res.json())                      //use effect to handle data fetching using params id
        .then(data => setVan(data.vans))              // set each van page with info
}, [params.id])

  // check if there is a van then displays or else show....loading..
  // @returns image , type,price, description and action button to rent van
  return (
    <div className="van-detail-container">
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