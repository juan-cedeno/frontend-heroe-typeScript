import axios from './headerToken'
import { User } from '../interface/User'


const BASER_URL=process.env.REACT_APP_URL_API

export const loginUser = async (email : string , password: string) => {
     try {
          const {data} = await axios.post<User>(`${BASER_URL}/login` , {email , password})
          return data

     } catch (error) {
          console.log(error);
          return undefined 
     }
}

export const registerUser = async(name : string , email : string, password : string) => {
     try {
          const {data} = await axios.post<User>(`${BASER_URL}/register` , {name , email , password})
          return data
     } catch (error) {
          console.log(error);
          return undefined
          
     }
}
export const renewToken = async () => {
     try {
          const {data} = await axios.get<User>(`${BASER_URL}/renew`)
          return data
     } catch (error) {
          console.log(error);
          return undefined
     }
     
}