import { useContext } from "react"
import { DcList } from "../components/DcList"
import { HeroeContext } from "../context/HeroeContext"

export const DcPage = () => {

     const {heroes} = useContext(HeroeContext)

     return (
          <div className = 'cont-heroe'>
              {
                   heroes.map(items => (
                        <DcList items = {items} key = {items._id}/>
                   ))
              }
          </div>
     )
}
