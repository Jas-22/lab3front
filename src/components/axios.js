import axios from 'axios'
const instance = axios.create({
 baseURL: "https://lab3back.herokuapp.com/"
})
export default instance