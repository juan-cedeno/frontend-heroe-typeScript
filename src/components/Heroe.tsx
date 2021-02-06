
import { useContext } from 'react';
import { HeroeContext } from '../context/HeroeContext';
import '../css/heroe.css'
import { MarvelList } from './MarvelList';


export const Heroe = () => {

  const {heroe} = useContext(HeroeContext)

  return (
     <div className = 'cont-heroe'>
         {
           heroe.map(items => (
             <MarvelList items = {items} key = {items._id}/>
           ))
         }
     </div>
  );
};
