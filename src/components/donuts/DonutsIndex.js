import { useState } from "react"
import LoadingScreen from '../shared/LoadingScreen'


const DonutsIndex = (props) => {
     const {donuts, setDonuts} = useState(null)

     if (!donuts){
          return <p>loading... <LoadingScreen/></p>
     }

     return (
          <>
               <h1>Donut's Index</h1>
          </>
     )
}

export default DonutsIndex