import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://burger-xi.firebaseio.com/'
})

export default instance