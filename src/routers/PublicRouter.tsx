
import { useContext } from "react"
import { Redirect, Route, RouteProps } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

export const PublicRouter = (props : RouteProps) => {

     const {auth} = useContext(AuthContext)

     return (
          auth?.logued ? <Redirect to = '/'/>
                       : <Route {...props}/>           
     )
}
