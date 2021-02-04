
import axios from 'axios'

const token = localStorage.getItem('TOKEN') || ''

const headerToken = axios.create({
     headers : {
          'x-token':token
     }
})

export default headerToken 