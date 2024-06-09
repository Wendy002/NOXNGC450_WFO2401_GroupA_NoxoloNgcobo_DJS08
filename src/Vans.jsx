//vans page component
import React from "react"
//fetch("/api/vans")` to kick off the request to get the
// data from our fake Mirage JS server
//use react.useEffect


const Vans = () => {

    React.useEffect(()=>{
        fetch("api/vans")
        .then(res=> res.json())
        .then(data => console.log(data))
    },[])
  return (
    <h1>Vans page goes here 🚐</h1>
  )
}

export default Vans