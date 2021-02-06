import { createContext } from "react";



export const HeroeContext = createContext({} )

export const HeroeProvider = ({children} : any) => {

   
     
     return (
          <div>
               <HeroeContext.Provider value = {{
                    
               }}>
                    {children}
               </HeroeContext.Provider>
          </div>
     )

}