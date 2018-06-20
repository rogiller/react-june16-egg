import React, { Component } from 'react';
import UserList from "./UserList";
import RandomButton from "./RandomButton";

class UserListContainer extends Component {

    //Method #1 for initial state
    state = {users : [], filteredUsers: [], random: 0};

    constructor(props){
        super(props);
        //Method #2 for initial state
        //this.state = {users: []};
        this.handleUserListChange = this.handleUserListChange.bind(this);
        this.handleRandom = this.handleRandom.bind(this);
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

    handleRandom(){
        let newRandom = this.state.random + 1;
        this.setState({random: newRandom});
        console.log(this.state.random);
    }

    render() {
        console.log('render UserListContainer');
        return (
            <div>
                <UserList displayText={"USER LIST"} users={this.state.filteredUsers} handleChange={this.handleUserListChange}/>
                <RandomButton btnName="Random #1 (No State Props)" handleRandom={this.handleRandom}/>
                <RandomButton btnName="Random #2 (Random State Prop)" handleRandom={this.handleRandom} random={this.state.random}/>
            </div>
        );
    }

}

export default UserListContainer;
