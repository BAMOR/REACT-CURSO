
import { UserForm } from "./components/UserFrom"
import { UserList } from "./components/UserList"
import { useUsers } from "./hooks/useUsers";



export const UserApp = () => {

    const {
                users,
        userSelected,
        initialUserForm,

        handrelAddUser,
        handrelRemoveUser,
        handrelUserSelectedForm
    } = useUsers();

   

    return (
        <div className="container my-4">
            <h2>Users App</h2>

            <div className="row">  {/* row es fila */}
                <div className="col">  {/* col es columna */}
                    <UserForm 
                    userSelected = {userSelected}
                    initialUserForm = {initialUserForm}
                    handrelAddUser = {handrelAddUser} />

                </div>
                <div className="col">
                    {
                        users.length === 0
                        ? <div className="alert alert-warning">No hay usuarios agregados!</div>
                        : <UserList 
                    users= {users}
                    handrelUserSelectedForm = {handrelUserSelectedForm}
                    handrelRemoveUser = {handrelRemoveUser} />

                    }
                    
                </div>

            </div>

        </div>
    )
}