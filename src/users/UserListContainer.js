import React, { Component } from 'react';
import UserList from "./UserList";

class UserListContainer extends Component {

    //Method #1 for initial state
    state = {users : []};

    constructor(props){
        super(props);
        //Method #2 for initial state
        this.state = {users: []};
    }

    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => this.setState({users : json}))
    }

    componentDidMount(){
        console.log('componentDidMount');
    }

    handleUserListChange(){
        console.log(arguments);
    }

    render() {
        return (
            <UserList displayText={"USER LIST"} users={this.state.users} handleChange={this.handleUserListChange}/>
        );
    }

}

export default UserListContainer;
