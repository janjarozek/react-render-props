import React from 'react'

import UsersTable from '../UsersTable';
import UsersCard from '../UsersCard';

class UsersContainer extends React.Component {
    state = {
        users: []
    }
    getUsersFromAPI = async () => {
        const response = await fetch("https://randomuser.me/api/?results=10");
        if (response.ok) {
            const data = await response.json();
            this.setState({
                users: data.results
            });
        }
    }

    componentDidMount() {
        this.getUsersFromAPI();
    }

    render() {
        const { users } = this.state;
        const { viewTable } = this.props;
        return (
            <div>
                {viewTable && <UsersTable users={users} />}
                {!viewTable && <UsersCard users={users} />}
            </div>
        )
    };
}
export default UsersContainer;