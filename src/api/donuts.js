import apiUrl from '../apiConfig'
import axios from 'axios'

export const getAllDonuts = () => {
    return axios(`${apiUrl}/donuts`)
}

export const getOnePet = (id) => {
    return axios(`${apiUrl}/pets/${id}`)
}
