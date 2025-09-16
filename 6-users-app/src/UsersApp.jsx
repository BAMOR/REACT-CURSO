
import { LoginPages } from "./auth/pages/LoginPages";
import { UsersPage } from "./pages/UserPage";

import { Navbar } from "./components/layout/Navbar";
import { useAuth } from "./auth/pages/hooks/useAuth";



export const UserApp = () => {

   
const {login, handlerLogin, handrelLogout} =useAuth();
    
    return (
        <>
        {
        login.isAuth
        ?(
            <>
        <Navbar login ={login} handrelLogout = {handrelLogout} />
        <UsersPage/>
    </>)
        : <LoginPages handlerLogin= {handlerLogin} /> }
       
 
        </>
    )
}