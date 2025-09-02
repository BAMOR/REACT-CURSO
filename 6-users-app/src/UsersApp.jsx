import { UserForm } from "./components/UserFrom"
import { UserList } from "./components/UserList"


    const initialUsers = [
        {
            id: 1,
            username: 'pepe',
            email: 'pepe@correo.com'
        }
    ]

export const UserApp = () => {


        const handrelAddUser = (user) =>{
            console.log(user)
        }
    

    return (
        <div className="container my-4">
            <h2>Users App</h2>

            <div className="row">  {/* row es fila */}
                <div className="col">  {/* col es columna */}
                    <UserForm handrelAddUser = {handrelAddUser} />

                </div>
                <div className="col">
                    <UserList users= {initialUsers} />

                </div>

            </div>

        </div>
    )
}