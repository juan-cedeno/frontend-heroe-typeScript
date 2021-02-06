import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { Heroes } from "../interface/Heroes";
import {fetchSinToken } from "../service/fetch";

interface IProvider {
  children: ReactNode;
}

interface IContext {
     heroe: Heroes[],
     searchHero : (name : string) => Heroes[]
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

  const searchHero = useCallback((name : string = '') => {

    if (name === '') {
      return []
    }
    return heroe.filter(heroes => heroes.superhero.toLocaleLowerCase().includes(name.toLocaleLowerCase()))

  },[heroe])


  return (
    <div>
      <HeroeContext.Provider 
      value={{
          heroe,
          searchHero
      }}>

       {children}

      </HeroeContext.Provider>
    </div>
  );
};
