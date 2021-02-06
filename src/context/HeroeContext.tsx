import { createContext, ReactNode, useEffect, useState } from "react";
import { Heroes } from "../interface/Heroes";
import { fetchSinToken } from "../service/fetch";

interface IProvider {
  children: ReactNode;
}

interface IContext {
     heroe: Heroes[]
}

export const HeroeContext = createContext<IContext>({} as IContext);

export const HeroeProvider = ({ children }: IProvider) => {

  const [heroe, setHeroe] = useState<Heroes[]>([]) 

  useEffect(() => {
    const getHeroes = async ()  => {
      const data = await fetchSinToken<Heroes[]>("heroe", {}, "GET");
      setHeroe(data)

     }
     getHeroes();
  }, []);

  return (
    <div>
      <HeroeContext.Provider 
      value={{
          heroe
      }}>

       {children}

      </HeroeContext.Provider>
    </div>
  );
};
