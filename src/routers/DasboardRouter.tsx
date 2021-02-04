import { Redirect, Route, Switch } from "react-router-dom"
import { Header } from "../components/Header"
import { DcPage } from "../pages/DcPage"
import { MarvelPage } from "../pages/MarvelPage"

export const DasboardRouter = () => {
     return (
          <div className = 'container'>
               <Header/>
               <Switch>
                    <Route exact path = '/marvel' component = {MarvelPage}></Route>
                    <Route exact path = '/dc' component = {DcPage}></Route>
                    <Redirect to = '/marvel'/>
               </Switch>
          </div>
     )
}
