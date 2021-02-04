import { useContext } from "react"
import { Redirect, Route, RouteProps } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

export const PublicRouter = (props : RouteProps) => {

     const {user} = useContext(AuthContext)


     return (
          user?.logged ? <Redirect to = '/'/> 
                       :  <Route {...props}/> 
          
     )
}
