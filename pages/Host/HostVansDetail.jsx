import React from "react"
import { useParams } from "react-router-dom"

const HostVansDetail = () => {
    const [currentVan, setCurrentVan] = React.useState(null)   
    
    React.useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => console.log(data))
    }, []) 

  return (
    <div>HostVansDetail</div>
  )
}

export default HostVansDetail