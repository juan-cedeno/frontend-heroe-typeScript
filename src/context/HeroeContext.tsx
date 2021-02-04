import { createContext, useEffect, useState } from "react";
import { Heroes } from "../interface/Heroes";
import {getHeroe} from '../services/heroeService'


interface IContext {
     heroes: Heroes[]
}

export const HeroeContext = createContext<IContext>({} as IContext)

export const HeroeProvider = ({children} : any) => {

     const [heroes, setHeroes] = useState<Heroes[]>([])
     console.log(heroes);
     

     useEffect(() => {
         const getAllHeroe = async () => {
               const data = await getHeroe()
               setHeroes(data)
         }
         getAllHeroe()
     }, [])
     
     return (
          <div>
               <HeroeContext.Provider value = {{
                    heroes
               }}>
                    {children}
               </HeroeContext.Provider>
          </div>
     )

}