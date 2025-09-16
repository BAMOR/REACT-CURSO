

import { UserList } from "../components/UserList"
import { UserModalForm } from "../components/UserModalForm";
import { useUsers } from "../hooks/useUsers";




export const UsersPage = () => {

    const {
        users,
        userSelected,
        initialUserForm,
        visibleFrom,

        handrelAddUser,
        handrelRemoveUser,
        handrelUserSelectedForm,
        handrelOpenForm,
        handrelCloseForm,
    } = useUsers();



    return (
        <>
       
            {!visibleFrom ||
                <UserModalForm
                userSelected = {userSelected}
                initialUserForm= {initialUserForm}
                 handrelAddUser = {handrelAddUser}
                 handrelCloseForm = {handrelCloseForm} />
            }


            <div className="container my-4">
                <h2>Users App</h2>

                <div className="row">  {/* row es fila */}
                    {/* col es columna */}
                    {!visibleFrom || <div className="col">
                    </div>}



                    <div className="col">
                        {visibleFrom || <button
                            className="btn btn-primary my-2"
                            onClick={handrelOpenForm}>
                            Nuevo Usuario
                        </button>}

                        {
                            users.length === 0
                                ? <div className="alert alert-warning">No hay usuarios agregados!</div>
                                : <UserList
                                    users={users}
                                    handrelUserSelectedForm={handrelUserSelectedForm}
                                    handrelRemoveUser={handrelRemoveUser} />

                        }

                    </div>

                </div>

            </div>
        </>
    )
}