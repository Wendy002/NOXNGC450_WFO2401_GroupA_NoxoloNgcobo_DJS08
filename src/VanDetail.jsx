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

  return (
   <h1>Van detail page goes here</h1>   
  )
}

export default VanDetail