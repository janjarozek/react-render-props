import { Component } from 'react'

class UsersContainer extends Component {
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
        } else {
            console.error("Bad response, please check:", response);
        }
    }

    componentDidMount() {
        this.getUsersFromAPI();
    }

    render() {
        const { users } = this.state;

        return this.props.render( {users} );
    };
}
export default UsersContainer;