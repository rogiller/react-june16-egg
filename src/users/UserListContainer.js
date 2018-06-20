import React, { Component } from 'react';
import UserList from "./UserList";

class UserListContainer extends Component {

    //Method #1 for initial state
    state = {users : [], filteredUsers: []};

    constructor(props){
        super(props);
        //Method #2 for initial state
        //this.state = {users: []};
        this.handleUserListChange = this.handleUserListChange.bind(this);
    }

    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => this.setState({users : json, filteredUsers: json}))
    }

    componentDidMount(){
        console.log('componentDidMount');
    }

    handleUserListChange(event){
        let filtered = this.state.users.filter(user => user.name.toLowerCase().includes(event.target.value.toLowerCase()));
        this.setState({filteredUsers : filtered});
    }

    render() {
        return (
            <UserList displayText={"USER LIST"} users={this.state.filteredUsers} handleChange={this.handleUserListChange}/>
        );
    }

}

export default UserListContainer;
