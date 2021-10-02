import React from 'react'

const styles = {
    container: {
        border: "1px solid gray",
        width: "240px",
        margin: "0 auto"
    },
    card: {
        border: "1px solid black",
        padding: "5px",
        width: "200px",
        margin: "10px auto"
    },
    item: {
        display: "inline-block",
        padding: "5px"
    }
}

export default function UsersCard({ users }) {
    return (
        <div style={styles.container}>
            { users.map( user => (
                <div key={user.login.uuid} style={styles.card}>
                    <div style={styles.item}>{user.name.first}</div>
                    <div style={styles.item}>{user.name.last}</div>
                </div>
            )) }
        </div>
    )
}
