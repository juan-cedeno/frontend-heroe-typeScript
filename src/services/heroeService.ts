import axios from "axios"
import { Heroes } from "../interface/Heroes"


const BASER_URL=process.env.REACT_APP_URL_API


export const getHeroe = async() => {
     try {
          const {data} = await axios.get<Heroes[]>(`${BASER_URL}/heroe`)
          return data
     } catch (error) {
          console.log(error);
          return []
     }
}