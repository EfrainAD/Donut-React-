import { useState, useEffect } from "react"
import LoadingScreen from '../shared/LoadingScreen'
import {getAllDonuts} from '../../api/donuts'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import messages from '../shared/AutoDismissAlert/messages'

// style for our card container
const cardContainerStyle = {
     display: 'flex',
     flexFlow: 'row wrap',
     justifyContent: 'center'
 }

const DonutsIndex = (props) => {
     const [donuts, setDonuts] = useState(null)

     const [error, setError] = useState(false)

    const { msgAlert } = props
    console.log('Props in DonutsIndex', props)

     useEffect(() => { 
          console.log(props)
          getAllDonuts()
               .then(res => {
                    console.log(res.data.donuts) 
                    setDonuts(res.data.donuts)
               })
               .catch(err => {
                    msgAlert({
                        heading: 'Error Getting Donuts',
                        message: messages.getDonutsFailure,
                        variant: 'danger',
                    })
                    setError(true)
                })
     },[])

     if (error) {
          return <p>Error!</p>
      }

     if (!donuts){
          return <p>Loading... <LoadingScreen/></p>
     } else if (donuts.length === 0) {
          return <p>No donuts yet. Better add some.</p>
     }

     const donutCards = donuts.map((donut) => (
          <Card style={{ width: '30%', margin: 5}} key={ donut.id }>
            <Card.Header>{ donut.fullTitle }</Card.Header>
            <Card.Body>
                <Card.Text>
                    <Link to={`/donuts/${donut._id}`}>View { donut.name }</Link>
                </Card.Text>
            </Card.Body>
        </Card>
     ))

     donuts.forEach(donut => {
          console.log('donut.name: ', donut.name)
          console.log('donut.id: ', donut._id)
     });

     return (
          // <div style={ cardContainerStyle }>
          <div>
               { donutCards }
          </div>
     )
}

export default DonutsIndex