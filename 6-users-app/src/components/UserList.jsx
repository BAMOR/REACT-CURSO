import { UserRow } from "./UserRow"

export const UserList = ({ handrelRemoveUser ,users = [] }) => {
    return (
        <>

            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(({id, username, email}) => (
                            <UserRow 
                            handrelRemoveUser = {handrelRemoveUser}
                            key={id} 
                            id={id} 
                            username={username} 
                            email={email}/>
                        ))
                    }



                </tbody>

            </table>
        </>
    )

}