
import { Link } from "react-router-dom"
import 
const HostVans = () => {
  const [vans, setVans] = React.useState([]) // init state

  React.useEffect(() => {                  //handle side effects
    fetch("/api/host/vans")
        .then(res => res.json())
        .then(data => setVans(data.vans))
}, [])

 

  return (
    <div>HostVans</div>
  )
}

export default HostVans