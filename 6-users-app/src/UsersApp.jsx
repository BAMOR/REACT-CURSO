
import { useReducer } from "react";
import { LoginPages } from "./auth/pages/LoginPages";
import { UsersPage } from "./pages/UserPage";
import { loginReducer } from "./auth/pages/reducer/loginReducer";
import Swal from "sweetalert2";


    const initialLogin ={
        isAuth:false,
        user: undefined,
    };
export const UserApp = () => {

   
    const[login, dispach] = useReducer(loginReducer, initialLogin);
    const handlerLogin = ({username, password}) => {
         if(username === 'admin' && password ==='12345'){
            const user = {username: 'admin'}
            dispach({
                type: 'login',
                payload:user,

            })
        }else{
            Swal.fire('Error Login','Username o password invalidos', 'error')

        }
    }
    return (
        <>
        {login.isAuth
        ?<UsersPage/>
        : <LoginPages handlerLogin= {handlerLogin} /> }
       
 
        </>
    )
}