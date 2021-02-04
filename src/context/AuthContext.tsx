import { createContext, useCallback, useState } from "react";
import { notificationMessage } from "../helpers/notificationMessage";
import { User } from "../interface/User";
import { loginUser, registerUser, renewToken } from "../services/userService";

interface IinitialState {
  user?: User;
  logged: boolean;
  checking: boolean;
}

interface IContext {
  user: IinitialState | undefined;
  login: (email: string, passwrod: string) => void;
  register: (name: string, email: string, password: string) => void;
  verifiToken : () => void,
  loading : boolean,
  logOut : () => void
}

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthContextProvider = ({ children }: any) => {
  const [user, setUser] = useState<IinitialState>();
  const [loading, setLoading] = useState<boolean>(false)

  const login = async (email: string, password: string) => {
    setLoading(true)
    const user = await loginUser(email, password);
    setLoading(false)
    if (user?.message) {
      setLoading(false)
      return notificationMessage("Error", user.message, "danger");
    }

    if (user) {
      localStorage.setItem("TOKEN", user.token);

      setUser({
        user,
        logged: true,
        checking: false,
      });
    }
  };

  const register = async (name: string, email: string, password: string) => {
    setLoading(true)
    const user = await registerUser(name, email, password);
    setLoading(false)

    if (user?.message) {
      setLoading(false)
      return notificationMessage("Error", user.message, "danger");
    }

    if (user) {
      localStorage.setItem("TOKEN", user.token);

      setUser({
        user,
        logged: true,
        checking: false,
      });
    }
  };

  const verifiToken = useCallback(async () => {
    const token = localStorage.getItem("TOKEN");
    if (!token) {
      setUser({
        checking: false,
        logged: false,
      });
    }

    const user = await renewToken();

    if (user?.token) {
      localStorage.setItem("TOKEN", user.token);
      setUser({
        user,
        checking: false,
        logged: true,
      });

    }else {
         setUser({
              checking :false,
              logged : false
         })
    }

  }, []);


  const logOut = () => {
    localStorage.removeItem('TOKEN')
    setUser({
      logged : false,
      checking : false
    })
  }

  return (
    <div>
      <AuthContext.Provider
        value={{
          user,
          login,
          register,
          verifiToken,
          loading,
          logOut
        }}
      >
        {children}
      </AuthContext.Provider>
    </div>
  );
};
