import { useReducer } from "react";
import { loginReducer } from "../reducer/loginReducer";
import Swal from "sweetalert2";
import { loginUser } from "../services/authService";

    const initialLogin=JSON.parse(sessionStorage.getItem('login')) ||{
        isAuth:false,
        user: undefined,
    };
export const useAuth = () => {

    const[login, dispach] = useReducer(loginReducer, initialLogin);

    const handlerLogin = ({username, password}) => {
        const isLogin = loginUser({username, password})
         if (isLogin){
            const user = {username: 'admin'}
            dispach({
                type: 'login',
                payload:user,

            })
            sessionStorage.setItem('login', JSON.stringify({
                isAuth : 'login',
                user,
            }));

        }else{
            Swal.fire('Error Login','Username o password invalidos', 'error')

        }
    }

    const handrelLogout = () =>{
        dispach({
            type:'logout',
        })
        sessionStorage.removeItem('login')
    }

    return{
        login,
        handlerLogin,
        handrelLogout,


    }
}