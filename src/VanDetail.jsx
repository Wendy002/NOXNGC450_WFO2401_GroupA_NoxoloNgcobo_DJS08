import React from 'react'
import { useParams } from 'react-router-dom'
const VanDetail = () => {
  const params = useParams()
  const [van, setVan] = React.useState(null)
  return (
   <h1>Van detail page goes here</h1>   
  )
}

export default VanDetail