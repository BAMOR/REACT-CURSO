import { useState } from "react"

    const initialUserForm = {
        username: '',
        password: '',
        email: '',
    }
export const UserForm = ( {handrelAddUser}) => {

    const [userForm, setUserForm] = useState(initialUserForm);


    const {username, password, email} = userForm;

    const onInputChange = ({target}) => {
        // console.log(target.value)

        const {name, value}= target;
        setUserForm({
            ...userForm,
            [name]: value,
        })
    } 

    const onSubmit = (event) => {

        if(!username || !password || !email){
            alert ('Debe de completar el fromulario!')
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

        <input
        className="form-control my-3 w-75"
        placeholder="Password"
        type="password"
        name="password"
        value={password}
        onChange={onInputChange}
        />

        <input
        className="form-control my-3 w-75"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onInputChange}
        />

        <button
        className="btn btn-primary"
        type="submit">
        crear
        </button>

       

       </form>
    )
}