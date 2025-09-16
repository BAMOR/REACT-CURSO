import {Navigate, Route, Routes} from "react-router-dom"
import { UsersPage } from "../pages/UserPage"
import { Navbar } from "../components/layout/Navbar"

export const UserRoutes = ({login,handrelLogout })=> {

    <>
        <Navbar login ={login} handrelLogout = {handrelLogout} />
        <Routes>
            <Route path="users" element = {<UsersPage/>}/>
            <Route path="/" element = {<Navigate to = "/users"/>}/>
        </Routes>
    </>
}