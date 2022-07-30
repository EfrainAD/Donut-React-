import apiUrl from '../apiConfig'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

export const getAllDonuts = () => {
    return axios(`${apiUrl}/donuts`)
}

export const getOneDonut = (id) => {
    return axios(`${apiUrl}/donuts/${id}`)
}

export const createOneDonut = (donut) => {

    axios({
      method: 'POST',
      url: `${apiUrl}/donuts`,
      data: { donut: donut}
    })
      .then((res) => {
        console.log(res)
        // CLEAN UP
        // this.setState({ createdId: res.data.book._id })
        // hope works
        // return <Redirect to={ `/${apiUrl}/donuts/${res.data.donut}`} />
        // CLEANUP
        // setCreatedId(res.data.book._id)
      })
      .catch(console.error)
  }

//   axios.post("https://reqres.in/api/login", userData).then((response) => {
//       console.log(response.status);
//       console.log(response.data.token);
//     });

// This is my failed attempt to figer this out.
// export const createOneDonut = (donut, user) => {
//      axios.post(`${apiUrl}/donuts`, {donut}, {user})
//           .then(function (response) {
//           console.log(response);
//           })
//           .catch(function (error) {
//           console.log(error);
//           })
// }