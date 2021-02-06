
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"


import '../css/header.css'

export const Header = () => {

     const {t} = useTranslation()

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
               </div>
                    <button 
                    className = 'btn-black'
                    >
                    {t('logOut')}</button>
          </div>
     )
}
