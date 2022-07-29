import { useState, useEffect,  } from 'react'
 
import { useParams, useNavigate } from 'react-router-dom' 

 import LoadingScreen from '../shared/LoadingScreen'
 import { getOneDonut } from '../../api/donuts'
 import messages from '../shared/AutoDismissAlert/messages'
 import { Container, Card } from 'react-bootstrap'

const ShowDonut = (props) => {
     const [donut, setDonut] = useState(null)

//     const id = '62e33bac48370421104d2950'
    const { id } = useParams()
    const navigate = useNavigate()

    const { msgAlert } = props

    useEffect(() => {
          console.log('HI id: ', id)
        getOneDonut(id)
            .then(res => setDonut(res.data.donut))
            .catch(err => {                   
               msgAlert({
                   heading: 'Error getting donut',
                   message: messages.getdonutsFailure,
                   variant: 'danger'
               })
               // navigate('/')
               //navigate back to the home page if there's an error fetching
           })
    }, [])

    if (!donut) {
        return <LoadingScreen />
    }

    return (
     <Container className="fluid">
         <Card>
             <Card.Header>{ donut.name }</Card.Header>
             <Card.Body>
                 <Card.Text>
                     <div><small>Age: { donut.name }</small></div>
                     <div><small>Type: { donut.name }</small></div>
                     <div><small>
                         Had it? { donut.hasEaten ? 'yes' : 'no'}
                     </small></div>
                 </Card.Text>
             </Card.Body>
         </Card>
     </Container>
 )
 }
 
 export default ShowDonut