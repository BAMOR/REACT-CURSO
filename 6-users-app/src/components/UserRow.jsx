export const UserRow = ({handrelUserSelectedForm, handrelRemoveUser,id, username, email, password}) => {

  
    return (
        <tr >
            <th>{id}</th>
            <th>{username}</th>
            <th>{email}</th>
            <th>
                <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={() => handrelUserSelectedForm ({
                        id,
                        username,
                        email,
                        password
                    }) }>
                    Update
                </button>
            </th>
            <th>
                <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => handrelRemoveUser(id)}>
                    remove
                </button>
            </th>
        </tr>
    )
}