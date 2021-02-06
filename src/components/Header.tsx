
import { useCallback, useContext } from "react"
import { useTranslation } from "react-i18next"
import { Link, useHistory } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"


import '../css/header.css'

export const Header = () => {

     const {t} = useTranslation()
     const history = useHistory()
     const {logOut , auth} = useContext(AuthContext)

     const handlenLogOut = useCallback(() => {
          logOut()
     },[logOut])

     const handlenSignIn = useCallback(() => {
          history.push('accounts/login')
     },[history])

     return (
          <div className = 'cont-header'>
               <div className = 'social'>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                         <i className="fab fa-github"></i>
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                         <i className="fab fa-linkedin-in"></i>
                    </a>
               </div>

               <div className = 'menu'>
                    <Link to = '/marvel'>marvel</Link>
                    <Link to = '/dc'>Dc</Link>
                    <Link to = '/search'>{t('search')}</Link>
               </div>
                    <div>
                         {
                              auth?.logued ? <button 
                                             className = 'btn-black'
                                             onClick = {handlenLogOut}
                                             >
                                             {t('logOut')}</button>

                                           : <button 
                                             className = 'btn-black sigIn'
                                             onClick = {handlenSignIn}
                                             >{t('signIn')}</button>  
                         }
                    </div>
          </div>
     )
}
