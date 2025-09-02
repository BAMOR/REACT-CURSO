import { UserForm } from "./components/UserFrom"
import { UserList } from "./components/UserList"

export const UserApp = () => {

    const initialUsers = [
        {
            id: 1,
            username: 'pepe',
            email: 'pepe@correo.com'
        }
    ]

    return (
        <div className="container my-4">
            <h2>Users App</h2>

            <div className="row">  {/* row es fila */}
                <div className="col">  {/* col es columna */}
                    <UserForm />

                </div>
                <div className="col">
                    <UserList users= {initialUsers} />

                </div>

            </div>

        </div>
    )
}