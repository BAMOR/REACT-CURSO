import { useEffect, useState } from "react"
import Swal from "sweetalert2";


export const UserForm = ({ userSelected, initialUserForm, handrelAddUser }) => {

    const [userForm, setUserForm] = useState(initialUserForm);


    const { id, username, password, email } = userForm;

    useEffect(() => {
        setUserForm({
            ...userSelected
        })
    }, [userSelected])

    const onInputChange = ({ target }) => {
        // console.log(target.value)

        const { name, value } = target;
        setUserForm({
            ...userForm,
            [name]: value,
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if (!username || (!password & id === 0) || !email) {
            Swal.fire({
                title: "Error de validacion",
                text: "Debe de completar los campos del formulario",
                icon: "error"
            });

            return;
        }
        event.preventDefault();
        handrelAddUser(userForm)
        // console.log(userForm
        setUserForm(initialUserForm);


    }
    return (
        <form onSubmit={onSubmit}>

            <input
                className="form-control my-3 w-75"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            {id > 0 || <input
                className="form-control my-3 w-75"
                placeholder="Password"
                type="password"
                name="password"
                value={password}
                onChange={onInputChange}
            />}


            <input
                className="form-control my-3 w-75"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onInputChange}
            />
            <input
                type="hidden"
                name="id"
                value={id}

            />

            <button
                className="btn btn-primary"
                type="submit">
                {id > 0 ? "Editar" : "Crear"}
            </button>



        </form>
    )
}