import { useState, useEffect,  } from 'react'
import { destroyOneDonut } from './../../api/donuts'
import { useParams, Link, useNavigate } from 'react-router-dom' 
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
        getOneDonut(id)
            .then(res => setDonut(res.data.donut))
            .catch(err => {                   
               msgAlert({
                   heading: 'Error getting donut',
                   message: messages.getdonutsFailure,
                   variant: 'danger'
               })
               navigate('/')
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
                     <div><small>This donut was from: { donut.from }</small></div>
                     <div><small>User's thoughts on the donut was: { donut.thoughts }</small></div>
                     <div><small>
                         User has eaten this donut? { donut.haveEaten ? 'yes' : 'no'}
                     </small></div>
                 </Card.Text>
             </Card.Body>
         </Card>
         
         <button onClick={() => destroyOneDonut(id, props.user)}>Delete Donut</button>
         
        <Link to={`/donuts/${id}/edit`}>
            <button>Edit Donut</button>
        </Link>
        
     </Container>
 )
 }
 
 export default ShowDonut