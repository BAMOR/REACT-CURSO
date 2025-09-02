export const UserRow = ({id, username, email}) => {
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
                    className="btn btn-danger btn-sm">
                    remove
                </button>
            </th>
        </tr>
    )
}