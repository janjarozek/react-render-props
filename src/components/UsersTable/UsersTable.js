import React from 'react'

const styles = {
    textAlign: "left",
    margin: "0 auto"
}

export default function UsersTable( {users} ) {
    return (
        <table style={styles}>
            <tr>
                <th>First name</th>
                <th>Last name</th>
            </tr>
            {users.map( user => (
                <tr key={user.login.uuid}>
                    <td>{user.name.first}</td>
                    <td>{user.name.last}</td>
                </tr>
            ))}
        </table>
    )
}
