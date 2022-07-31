import apiUrl from '../apiConfig'
import axios from 'axios'
// import Redirect from './../components/shared/Redirect'

export const getAllDonuts = () => {
    return axios(`${apiUrl}/donuts`)
}

export const getOneDonut = (id) => {
    return axios(`${apiUrl}/donuts/${id}`)
}

export const createOneDonut = (donut, user) => {
    
    console.log('API createOneDonut user.token=',user.token)
    return axios({
      method: 'POST',
      url: `${apiUrl}/donuts`,
      data: { donut: donut },
      headers: { Authorization: `Token token=${user.token}` }
    })
  }

export const destroyOneDonut = (id, user) => {
    console.log('destroyOneDonut is running')
    console.log('destroyOneDonut donut is ', id)
    console.log('destroyOneDonut user is ', user)
    return axios({
        method: 'delete',
        url: `${apiUrl}/donuts/${id}`,
        headers: { Authorization: `Token token=${user.token}` }
    })
}

export const editOneDonut = (donut, user) => {
    return axios({
        method: 'PATCH',
        url: `${apiUrl}/donuts/${donut._id}`,
        data: { donut: donut },
        headers: { Authorization: `Token token=${user.token}` }
      })
}