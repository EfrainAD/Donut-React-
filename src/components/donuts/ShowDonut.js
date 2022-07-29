import { useState, useEffect,  } from 'react'
 
import { useParams, useNavigate } from 'react-router-dom' 

 import LoadingScreen from '../shared/LoadingScreen'
 import { getOneDonut } from '../../api/donuts'
 import messages from '../shared/AutoDismissAlert/messages'

const ShowDonut = (props) => {
     const [donut, setDonut] = useState(null)

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
               //navigate back to the home page if there's an error fetching
           })
    }, [])

    if (!donut) {
        return <LoadingScreen />
    }

    return <p>This is the show donut component for { id }</p>
 }
 
 export default ShowDonut