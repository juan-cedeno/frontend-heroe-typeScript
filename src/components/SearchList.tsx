
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { Heroes } from "../interface/Heroes"

interface IProps {
     items : Heroes
}

export const SearchList = ({items}:IProps) => {

     const {t} = useTranslation()

     return (
          <div className = 'search-list animate__animated animate__fadeInDown '>
               <div className = 'img-search-list'>
                    <img src={items.image} alt={items.superhero}/>
               </div>
               <div className = 'letter-list-search'>
                    <p>{items.alter_ego}</p>
                    <p>{items.first_appearance}</p>
                    <Link to = {`/more/${items._id}`}>{t('more')}</Link>
               </div>
          </div>
     )
}
