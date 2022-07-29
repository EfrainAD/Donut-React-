import { useState, useEffect,  } from 'react'
 
 import { useParams } from 'react-router-dom'
 
 import LoadingScreen from '../shared/LoadingScreen'
 import { getOnePet } from '../../api/pets'
 

const ShowDonut = (props) => {
     const [pet, setPet] = useState(null)

    const { id } = useParams()
    // destructuring to get the id value from our route parameters

    useEffect(() => {
        getOnePet(id)
            .then(res => setPet(res.data.pet))
    }, [])

    if (!pet) {
        return <LoadingScreen />
    }

    return <p>This is the show pet component for { id }</p>
 }
 
 export default ShowDonut