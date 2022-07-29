import apiUrl from '../apiConfig'
import axios from 'axios'

export const getAllDonuts = () => {
    return axios(`${apiUrl}/donuts`)
}

export const getOneDonut = (id) => {
    return axios(`${apiUrl}/donuts/${id}`)
}
