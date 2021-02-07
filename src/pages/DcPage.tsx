import { useContext } from "react"
import { useTranslation } from "react-i18next"
import { DcList } from "../components/DcList"
import { Title } from "../components/Title"
import { HeroeContext } from "../context/HeroeContext"


export const DcPage = () => {

     const {heroe} = useContext(HeroeContext)
     
     const {t} = useTranslation()

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
