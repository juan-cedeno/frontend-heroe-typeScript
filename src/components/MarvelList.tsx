import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Heroes } from "../interface/Heroes";

interface IProps {
  items: Heroes;
}

export const MarvelList = ({ items }: IProps) => {

     const {t} = useTranslation()

  return (
    <>
      {items.publisher === "Marvel Comics" && (
        <div className = 'heroe'>

          <div className="cont-image">
               <img src={items.image} alt={items.superhero}/>
          </div>

          <div className = 'letter'>
               <h3><span>{t('alterEgo')}</span> {items.alter_ego}</h3>

               {
                    items.alter_ego !== items.characters && <p><span>{t('character') }</span> {items.characters}</p>
               }

               <p><span>{t('firstAppearance')}</span> {items.first_appearance}</p>
               <p><span>{t('publisher')}</span> {items.publisher}</p>
               <p><span>{t('superHero')}</span> {items.superhero}</p>
               <Link to = '/'>{t('more')}</Link>
          </div>
        </div>
      )}
    </>
  );
};
