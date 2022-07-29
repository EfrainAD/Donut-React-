import { useState, useEffect } from "react"
import LoadingScreen from '../shared/LoadingScreen'
import {getAllDonuts} from '../../api/donuts'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

// style for our card container
const cardContainerStyle = {
     display: 'flex',
     flexFlow: 'row wrap',
     justifyContent: 'center'
 }

const DonutsIndex = (props) => {
     const [donuts, setDonuts] = useState(null)

     useEffect(() => { //Check the s or not
          getAllDonuts()
               .then(res => {
                    console.log(res.data) 
                    setDonuts(res.data.donuts)
               })
               .catch(err => console.log(err))
     },[])

     if (!donuts){
          return <p>Loading... <LoadingScreen/></p>
     } else if (donuts.length === 0) {
          return <p>No donuts yet. Better add some.</p>
     }

     const donutCards = donuts.map((donut, key) => (
          <Card style={{ width: '30%', margin: 5}} key={ donut.id }>
            <Card.Header>{ donut.fullTitle }</Card.Header>
            <Card.Body>
                <Card.Text>
                    <Link to={`/donuts/${donut.id}`}>View { donut.name }</Link>
                </Card.Text>
            </Card.Body>
        </Card>
     ))

     return (
          // <div style={ cardContainerStyle }>
          <div>
               { donutCards }
          </div>
     )
}

export default DonutsIndex