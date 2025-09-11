import { UserForm } from "./UserFrom"

export const UserModalForm = ({userSelected,initialUserForm, handrelAddUser, handrelCloseForm}) => {

    return (
        <div className="abrir-modal animacion fadeIn">
                    <div className="modal" style={ {display:"block"}} tabIndex="-1">
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
    )

}