import { useState } from 'react'
import { createOneDonut } from './../../api/donuts'
import { useNavigate } from 'react-router-dom'
import DonutForm from '../shared/DonutForm'

const CreateDonut = (props) => {
     const navigate = useNavigate()
     //CLEANUP
	console.log('props in CreateDonut', props)

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
                    // console.log('updated Value: ', updatedValue)
                    console.log('updated Checked: ', updatedChecked)
                    // updatedValue = false
                    // if (updatedChecked ===  'on' ) {
                    //      updatedValue = null
                    // } else {
                    //      updatedValue = 'on'
                    // }

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
          // if (donut.haveEaten === 'on'){
          //      setDonut((preState)=>({...preState, ...{'haveEaten': true}}))}
               // setDonut({'haveEaten': true, 'name':'Chow"'})}
               // setDonut({'haveEaten': true})}
          // CLEANUP
          console.log('CreateDonut donut',donut)
          console.log('CreateDonut props.user',props.user)
          console.log('CreateDonut user.token=',props.user.token)
          createOneDonut(donut, props.user)
          .then((res) => {

               navigate(`/donuts/${res.data.donut._id}`)
          })
          .catch((error)=>{
            // console.log('API createOneDonut user.token=',user.toekn)
            console.log(error)})
          // TODO: Find another way.
          // return <Redirect to={'/'} />
     }

    return <DonutForm donut={ donut } handleChange={ handleChange } handleSubmit={ handleSubmit } />
}

export default CreateDonut