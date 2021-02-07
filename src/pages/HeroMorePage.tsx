import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory, useParams } from "react-router-dom";
import { Heroes } from "../interface/Heroes";
import { fetchConToken } from "../service/fetch";

import '../css/more.css'

interface IParams {
  id: string;
}

export const HeroMorePage = () => {
  const [items, setItems] = useState<Heroes>({} as Heroes)   
  
  const {id} = useParams<IParams>();
  const history = useHistory()

  useEffect(() => {
       const getHero = async (id: string) => {
            const data = await fetchConToken<Heroes>(`heroe/${id}`, {}, "GET");
            setItems(data)
       };
       getHero(id)
  }, [id])

     const {t} = useTranslation()

     const handlenBack = useCallback(() => {
          history.goBack()
     },[history])
     return (
     <div className = 'cont-more animate__animated animate__backInDown'>
          <div className= 'cont-img-more'>
               <img src={items.image} alt={items.superhero}/>
          </div>

          <div className = 'letter more-letter'>
               <h3><span>{t('alterEgo')}</span> {items.alter_ego}</h3>

               {
                    items.alter_ego !== items.characters && <p><span>{t('character') }</span> {items.characters}</p>
               }

               <p><span>{t('firstAppearance')}</span> {items.first_appearance}</p>
               <p><span>{t('publisher')}</span> {items.publisher}</p>
               <p><span>{t('superHero')}</span> {items.superhero}</p>
               <button onClick = {handlenBack}>{t('back')}</button>
          </div>
     </div>    
     )
};
