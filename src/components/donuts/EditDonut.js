import { useState, useEffect } from 'react'
import { getOneDonut, editOneDonut } from './../../api/donuts'
import DonutForm from '../shared/DonutForm'
import { useParams, useNavigate } from 'react-router-dom'
import messages from '../shared/AutoDismissAlert/messages'

const EditDonut = (props) => {
     const { id } = useParams()
     const { msgAlert } = props
     const [donut, setDonut] = useState(null)
     const navigate = useNavigate()
	console.log('props in CreateDonut', props)
	console.log('params id in CreateDonut: ', id)

     useEffect(() => {
          getOneDonut(id)
              .then(res => {setDonut(res.data.donut)})
              .then(res => console.log('sstarted fect donut ', donut))
              .catch(err => {
                 msgAlert({
                     heading: 'Error getting donut',
                     message: messages.getdonutsFailure,
                     variant: 'danger'
                 })
                 navigate('/')
             })
      }, [])

     const handleChange = (e) => {
          setDonut(prevDonut => {

               const updatedName = e.target.name
               // const updatedValue = e.target.value
               let updatedValue = e.target.value
               const updatedChecked = e.target.checked
               console.log(`${updatedName}: ${updatedValue}`)
               
               if (updatedName === 'haveEaten') {
                    if (updatedChecked === true) {
                         updatedValue = true
                    } else {
                         updatedValue = false
                    }
                    console.log('updated Checked: ', updatedChecked)
               } 

               const updatedDonut = {
                    [updatedName]: updatedValue
               }
               return {
                    ...prevDonut,
                    ...updatedDonut
               }
          })
    }

     const handleSubmit = (e) => {
          e.preventDefault()
          console.log('EditDonut donut',donut)
          console.log('EditDonut props.user',props.user)
          console.log('EditDonut user.token=',props.user.token)
          editOneDonut(donut, props.user)
          .then((res) => {
               console.log('DONE, donut has been edited')
               navigate(`/donuts/${id}`)
           })
           .catch((error)=> console.error)
          // TODO: Find another way.
     }
     // if (donut) {}
    return donut ? <DonutForm donut={ donut } handleChange={ handleChange } handleSubmit={ handleSubmit } /> : <p>Loading...</p>
//     return <DonutForm donut={ donut } handleChange={ handleChange } handleSubmit={ handleSubmit } />
}

export default EditDonut