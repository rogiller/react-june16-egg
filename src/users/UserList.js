import React, { Component } from 'react';
import UserListHeader from "./UserListHeader";

class UserList extends Component {

    state = {users : []};

    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => this.setState({users : json}))
    }

    componentDidMount(){
        console.log('componentDidMount');
    }

    render() {
        return (
            <div>
                <UserListHeader displayText="USERS"/>
                {this.state.users.map((item, index) => (
                    <ul className='indent' key={index}>{item.name}</ul>
                ))}
            </div>
        );
    }


}

export default UserList;
