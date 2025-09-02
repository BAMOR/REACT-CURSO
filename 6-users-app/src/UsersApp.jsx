import { useReducer } from "react"
import { UserForm } from "./components/UserFrom"
import { UserList } from "./components/UserList"
import { usersReducer } from "./Reducer/usersReducer"


    const initialUsers = [
        {
            id: 1,
            username: 'pepe',
            email: 'pepe@correo.com'
        }
    ]

export const UserApp = () => {

    const [users, dispatch] =  useReducer(usersReducer, initialUsers)


        const handrelAddUser = (user) =>{
            // console.log(user)
            dispatch({
                type:'addUser',
                payload : user


            })
        }

        const handrelRemoveUser =(id) =>{
            // console.log(id)
            dispatch ({
                type: 'removeUser',
                payload: id,
            })


        }
    

    return (
        <div className="container my-4">
            <h2>Users App</h2>

            <div className="row">  {/* row es fila */}
                <div className="col">  {/* col es columna */}
                    <UserForm handrelAddUser = {handrelAddUser} />

                </div>
                <div className="col">
                    <UserList 
                    users= {users}
                    handrelRemoveUser = {handrelRemoveUser} />

                </div>

            </div>

        </div>
    )
}