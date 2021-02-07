import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { Heroes } from "../interface/Heroes";
import {fetchSinToken } from "../service/fetch";

interface IProvider {
  children: ReactNode;
}

interface IContext {
     heroe: Heroes[],
     searchHero : (name : string) => Heroes[],
     loading : boolean
}

export const HeroeContext = createContext<IContext>({} as IContext);

export const HeroeProvider = ({ children }: IProvider) => {

  const [heroe, setHeroe] = useState<Heroes[]>([]) 
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const getHeroes = async ()  => {
      setLoading(true)
      const data = await fetchSinToken<Heroes[]>("heroe", {}, "GET");
      setHeroe(data)
      setLoading(false)
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
          searchHero,
          loading
      }}>

       {children}

      </HeroeContext.Provider>
    </div>
  );
};
