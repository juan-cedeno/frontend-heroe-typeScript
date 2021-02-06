import { Redirect, Route, Switch } from "react-router-dom"
import { Header } from "../components/Header"
import { DcPage } from "../pages/DcPage"
import { HeroMorePage } from "../pages/HeroMorePage"
import { MarvelPage } from "../pages/MarvelPage"


export const DasboardRouter = () => {
     return (
          <div className = 'container'>
               <Header/>
               <Switch>
                    <Route exact path = '/marvel' component = {MarvelPage}></Route>
                    <Route exact path = '/dc' component = {DcPage}></Route>
                    <Route exact path = '/more/:id' component = {HeroMorePage}></Route>
                    <Redirect to = '/marvel'/>
               </Switch>
          </div>
     )
}
