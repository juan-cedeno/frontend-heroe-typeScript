
import { useCallback, useContext, useState } from "react"
import { useTranslation } from "react-i18next"
import { Link, useHistory } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"


import '../css/header.css'

export const Header = () => {

     const [navBar, setNavBar] = useState<boolean>()

     const handlenNabvar = useCallback(() => {
          if (window.scrollY >= 80) {
               setNavBar(true)
          }else {
               setNavBar(false)
          }
     },[])

     window.addEventListener('scroll' , handlenNabvar)

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
          <div className = {`${navBar ? 'cont-header active' : 'cont-header'}`}>
               <div className = 'social'>
                    <a href="https://github.com/juan-cedeno" target="_blank" rel="noopener noreferrer">
                         <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/juan-cede%C3%B1o-660a47196/" target="_blank" rel="noopener noreferrer">
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
