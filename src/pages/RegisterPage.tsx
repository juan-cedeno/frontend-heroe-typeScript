import { useCallback, useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import joke from "../assets/joke.webp";
import { AuthContext } from "../context/AuthContext";


import "../css/user.css";
import { IUser } from "./LoginPage";

export const RegisterPage = () => {
  const { t } = useTranslation();
  const [userValue, setUserValue] = useState<IUser>({
    name: "",
    email: "",
    password: "",
  });


  const {register , loading} = useContext(AuthContext)

  const handlenChangeRegister = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserValue({
      ...userValue,
      [e.target.name]: e.target.value,
    });
  };

  const { email, password, name } = userValue;

  const handlenSubmit = useCallback((e : React.FormEvent <HTMLFormElement>) => {
    e.preventDefault()
    register(name! , email , password)

  },[name , email , password , register])
  
  const disableBtn = (email.length < 0 || password.length < 6 || name!?.length < 0) ?  true :  false

  return (
    <div className="cont-user animate__animated animate__fadeInRight">

      <div>
        <img className="img-user" src={joke} alt="joker" />
      </div>

      <form className="form" onSubmit = {handlenSubmit}>
        <h3>{t("signUp")}</h3>
        <input
          type="text"
          name="name"
          placeholder={t("name")}
          autoFocus
          value={name}
          onChange = {handlenChangeRegister}
          autoComplete = 'off'
        />
        <input
          type="email"
          name="email"
          placeholder={t("email")}
          value={email}
          onChange = {handlenChangeRegister}
          autoComplete = 'off'
        />
        <input
          type="password"
          name="password"
          placeholder={t("password")}
          value={password}
          onChange = {handlenChangeRegister}
          autoComplete = 'off'
        />
        <div className="btn-user">

          <button 
            className={`${loading || disableBtn ? 'btn disable': 'btn'}`} 
            type="submit"
            disabled = {loading || disableBtn}
            >   
            {t("createAccount")}
          </button>

          <span>
            {t("AlreadyAmember")}{" "}
            <Link to="/accounts/login">{t("signIn")}</Link>
          </span>
        </div>
      </form>
    </div>
  );
};
