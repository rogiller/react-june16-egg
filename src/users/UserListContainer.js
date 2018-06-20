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

    handleChange(){
        console.log(arguments);
    }

    render() {
        return (
            <div>
                <UserList displayText={"USERS"} handleChange={this.handleChange}/>
                {this.state.users.map((item, index) => (
                    <ul className='indent' key={index}>{item.name}</ul>
                ))}
            </div>
        );
    }

}

export default UserListContainer;
