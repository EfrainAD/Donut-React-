import { useState } from 'react'

import DonutForm from '../shared/DonutForm'

const CreateDonut = (props) => {
    const [donut, setDonut] = useState({
        name: '',
        from: '',
        thoughts: '',
        haveEaten: false
    })

    const handleChange = (e) => {
        setDonut(prevDonut => {
            const updatedValue = e.target.value
            const updatedName = e.target.name
            const updatedDonut = {
                [updatedName]: updatedValue
            }
            return {
                ...prevDonut,
                ...updatedDonut
            }
        })
    }

    return <DonutForm donut={ donut } handleChange={ handleChange } />
}

export default CreateDonut