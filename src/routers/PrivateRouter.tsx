
import { useContext } from "react"
import { Redirect, Route, RouteProps } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

export const PrivateRouter = (props : RouteProps) => {

     const {auth} = useContext(AuthContext)

     return (
          auth?.logued ? <Route {...props}/>
                       : <Redirect to = '/accounts/login'/>           
     )
}
