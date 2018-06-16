import React, { Component } from 'react';

class UserList extends Component {
    render() {
        return (
            <div>
                {this.state.users.map((item, index) => (
                    <ul className='indent' key={index}>{item.name}</ul>
                ))}
            </div>
        );
    }

    componentWillMount() {

        this.setState({users : []});

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => this.setState({users : json}))
    }
}

export default UserList;