export const UserRow = ({handrelRemoveUser,id, username, email}) => {

    const onRemoveUser = (id)=>{
        handrelRemoveUser(id)
    }
    return (
        <tr >
            <th>{id}</th>
            <th>{username}</th>
            <th>{email}</th>
            <th>
                <button
                    type="button"
                    className="btn btn-secondary btn-sm">
                    Update
                </button>
            </th>
            <th>
                <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => onRemoveUser(id)}>
                    remove
                </button>
            </th>
        </tr>
    )
}