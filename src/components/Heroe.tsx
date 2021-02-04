import { useContext} from "react";
import { MarvelList } from "./MarvelList";

import '../css/heroe.css'
import { HeroeContext } from "../context/HeroeContext";

export const Heroe = () => {
  const {heroes} = useContext(HeroeContext)
  

  return (
     <div className = 'cont-heroe'>
          {
               heroes.map(items => (
                    <MarvelList items = {items} key = {items._id}/>
                    
               ))
          }
     </div>
  );
};
