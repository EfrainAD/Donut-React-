import { useState } from 'react'
import { createOneDonut } from './../../api/donuts'
import { useNavigate } from 'react-router-dom'
import DonutForm from '../shared/DonutForm'

const CreateDonut = (props) => {
     const navigate = useNavigate()

     const [donut, setDonut] = useState({
          name: '',
          from: '',
          thoughts: '',
          haveEaten: false
     })

     const handleChange = (e) => {
          setDonut(prevDonut => {
               const updatedName = e.target.name
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
          createOneDonut(donut, props.user)
          .then((res) => {
               navigate(`/donuts/${res.data.donut._id}`)
          })
          .catch((error)=>{
            console.log(error)})
     }

    return <DonutForm donut={ donut } handleChange={ handleChange } handleSubmit={ handleSubmit } />
}

export default CreateDonut