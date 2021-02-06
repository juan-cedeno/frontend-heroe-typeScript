import React, { createContext, ReactNode, useCallback, useState } from "react";
import { notificationMessage } from "../helpers/notificationMessage";
import { User } from "../interface/User";
import { fetchSinToken } from "../service/fetch";

interface IProvider {
  children: ReactNode;
}

interface IAuth {
  user: User;
  checking: boolean;
  logued: boolean;
}

interface IContext {
  login: (emal: string, password: string) => void;
  auth: IAuth | undefined;
  loading : boolean
}

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IProvider) => {

  const [auth, setAuth] = useState<IAuth>();
  const [loading, setLoading] = useState<boolean>(false)

  const login = useCallback(async (email: string, password: string) => {
    setLoading(true)
    const user = await fetchSinToken("login", { email, password } , 'POST');
    console.log(user);
    
    setLoading(false)

    if (user.message) {
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

  return (
    <div>
      <AuthContext.Provider
        value={{
          login,
          auth,
          loading,
        }}
      >
        {children}
      </AuthContext.Provider>
    </div>
  );
};
