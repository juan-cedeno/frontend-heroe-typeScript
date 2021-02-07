import { useContext } from "react"
import { useTranslation } from "react-i18next"
import { DcList } from "../components/DcList"
import { Title } from "../components/Title"
import { HeroeContext } from "../context/HeroeContext"
import Skeletorcard from "../helpers/skeletor-card"


export const DcPage = () => {

     const {heroe ,  loading} = useContext(HeroeContext)
     
     const {t} = useTranslation()

     if (loading) {
          return <Skeletorcard/>
     }

     return (
          <div>
          <Title title = {t('dcHero')}/>     
          <div className = 'cont-heroe'>
              {
                   heroe.map(items => (
                        <DcList items = {items} key = {items._id}/>
                   ))
               }
          </div>

          </div>
     )
}
