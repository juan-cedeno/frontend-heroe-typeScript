import React, { createContext, ReactNode, useCallback, useState } from "react";
import { notificationMessage } from "../helpers/notificationMessage";
import { User } from "../interface/User";
import { fetchSinToken } from "../service/fetch";
import { fetchConToken } from "../service/fetch";

interface IProvider {
  children: ReactNode;
}

interface IAuth {
  user?: User;
  checking: boolean;
  logued: boolean;
}

interface IContext {
  login: (email: string, password: string) => void;
  auth: IAuth | undefined;
  loading : boolean,
  register: (name : string , email : string , password :  string) => void
  renew: () => void,
  logOut : () => void
}

export const AuthContext = createContext<IContext>({} as IContext);
export const AuthProvider = ({ children }: IProvider) => {
  
  const [auth, setAuth] = useState<IAuth>();
  const [loading, setLoading] = useState<boolean>(false)
  
  const login = useCallback(async (email: string, password: string) => {
    setLoading(true)
    const user =  await fetchSinToken <User> ("login", { email, password } , 'POST');
    
    setLoading(false)
    
    if (user.message) {
      setLoading(false)
      return notificationMessage("Error", user.message, "danger");
    }
    
    if (user) {
      localStorage.setItem("token", user.token);
      setAuth({
        user,
        checking: false,
        logued: true,
      });
      
    }

  }, []);

  const register = useCallback( async (name : string , email :  string , password : string) => {
    setLoading(true)
    const user = await fetchSinToken<User>('register' , {name , email , password} , 'POST')
    setLoading(false)
    
    if (user.message) {
      setLoading(false)
      return notificationMessage ('Error' , user.message , 'danger')
    }

    if (user) {
      setAuth({
        user,
        checking : false,
        logued : true 
      })
    }

  },[])

  const renew = useCallback(async () => {
    const token = localStorage.getItem('token') || ''
    if (!token) {
      setAuth({
        checking : false,
        logued : false
      })
    }
    
    const user = await fetchConToken<User>('renew' , {} , 'GET')
    if (user.token) {
      
      setAuth({
        user,
        checking : false,
        logued : true
      })
    }else {
      setAuth({
        checking : false,
        logued : false,
      })
    }

  },[])
  
  const logOut = useCallback(() => {
    localStorage.removeItem('token')
    setAuth({
      checking : false,
      logued : false
    })
  },[])
  
  return (
    <div>
      <AuthContext.Provider
        value={{
          login,
          auth,
          loading,
          register,
          renew,
          logOut
        }}
        >
        {children}
      </AuthContext.Provider>
    </div>
  );
};
