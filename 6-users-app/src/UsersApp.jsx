
import { UserForm } from "./components/UserFrom"
import { UserList } from "./components/UserList"
import { useUsers } from "./hooks/useUsers";



const initialUsers = [
    {
        id: 1,
        username: 'pepe',
        email: 'pepe@correo.com',
        password: "1234"
    }
]

const initialUserForm = {
    username: '',
    password: '',
    email: '',
}


export const UserApp = () => {

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
                <div className="abrir-modal animacion fadeIn">
                    <div className="modal" style={ {display:"block"}} tabIndex="1">
                        <div className="modal-dialog" role="docuement">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">
                                        {userSelected.id > 0 ? 'Editar' : 'Crear'}
                                    </h5>
                                </div>
                                <div className="modal-body">
                                    <UserForm
                                        userSelected={userSelected}
                                        initialUserForm={initialUserForm}
                                        handrelAddUser={handrelAddUser}
                                        handrelCloseForm={handrelCloseForm}
                                    />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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