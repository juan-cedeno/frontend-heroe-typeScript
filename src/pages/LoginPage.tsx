import { useCallback, useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useHistory } from "react-router-dom";
import user_img from "../assets/user_img.jpg";
import { AuthContext } from "../context/AuthContext";


import "../css/user.css";

export interface IUser {
  name?: string;
  email: string;
  password: string;
}

export const LoginPage = () => {
  const { t } = useTranslation();
  
  const [userValue, setUserValue] = useState<IUser>({
    email: "test@test.com",
    password: "123456",
  });

  const history = useHistory()

  const {loading , login , auth} = useContext(AuthContext)

  const { email, password } = userValue;

  const disableBtn = (email.length <= 0 || password.length < 6) ?  true :  false

  const handlenChangeUserValue = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUserValue({
      ...userValue,
      [e.target.name]: e.target.value,
    });
  },[userValue]);
  
  const handlenSubmit = useCallback (async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
     login(email , password)

  },[email, password , login ]);

  
  return (
    <div className="cont-user">

      <form className="form" onSubmit={handlenSubmit}>
        <h3>{t("signIn")}</h3>

        <input
          type="email"
          name="email"
          autoFocus
          autoComplete="off"
          placeholder={t("email")}
          value={email}
          onChange={handlenChangeUserValue}
        />

        <input
          type="password"
          name="password"
          placeholder={t("password")}
          value={password}
          autoComplete="off"
          onChange={handlenChangeUserValue}
        />

        <div className="btn-user">
          <button 
          className={`${loading || disableBtn ? 'btn disable': 'btn'}`} 
          type="submit"
          disabled = {loading || disableBtn}
          >    
            {t("login")}
            
          </button>
          <span>
            {t("notAmember")}{" "}
            <Link to="/accounts/register">{t("SignUpNow")}</Link>
          </span>
        </div>
      </form>
      <div>
        <img className="img-user" src={user_img} alt="user_img" />
      </div>
    </div>
  );
};
