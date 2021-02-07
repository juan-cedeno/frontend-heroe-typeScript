import { useContext } from "react"
import { useTranslation } from "react-i18next"
import { Heroe } from "../components/Heroe"
import { Title } from "../components/Title"
import { HeroeContext } from "../context/HeroeContext"
import Skeletorcard from "../helpers/skeletor-card"

export const MarvelPage = () => {
     const {t} = useTranslation()

     const {loading} = useContext(HeroeContext)
     
     
     if (!loading) {
          return <Skeletorcard/>         
     }

     return (
          <div>
               <div>
                 <Title title = {t('marvelHero')}/>   
               </div>
              <Heroe/>
          </div>
     )
}
