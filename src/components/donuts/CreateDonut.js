import { useState } from 'react'
import { createOneDonut } from './../../api/donuts'
// import { Redirect } from 'react-router-dom'
import DonutForm from '../shared/DonutForm'

const CreateDonut = (props) => {

     //CLEANUP
	console.log('props in CreateDonut', props)

     const [donut, setDonut] = useState({
          name: '',
          from: '',
          thoughts: '',
          haveEaten: false
          // owner: props.user._id
     })

     const handleChange = (e) => {
          setDonut(prevDonut => {
               const updatedValue = e.target.value
               const updatedName = e.target.name
               console.log(`${updatedName}: ${updatedValue}`)
               
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
          // TODO: Find another way.
          // return <Redirect to={'/'} />
     }

    return <DonutForm donut={ donut } handleChange={ handleChange } handleSubmit={ handleSubmit } />
}

export default CreateDonut