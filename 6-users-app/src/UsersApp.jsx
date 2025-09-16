
import { LoginPages } from "./auth/pages/LoginPages";
import { UsersPage } from "./pages/UserPage";

import { Navbar } from "./components/layout/Navbar";
import { useAuth } from "./auth/pages/hooks/useAuth";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserRoutes } from "./routes/UserRoutes";



export const UserApp = () => {

   
const {login, handlerLogin, handrelLogout} =useAuth();
    
    return (
        <Routes>

        {
        login.isAuth
        ?(
        <Route path="/*" element = {<UserRoutes 
        login ={login}
        handrelLogout = {handrelLogout}  />} />
        
        
       
    )
        : <>
            <Route path="/login" 
            element = { <LoginPages 
            handlerLogin= {handlerLogin} /> }/>

            <Route path="/*" element = {<Navigate to = "/login" />}/>
        </>
        
       }
       
 
        </Routes>
    )
}