import React from 'react';
import "./UserList.css";

const UserList = (props) => {
    return (
        <div className="userList">
            <h3>{props.displayText}</h3>
            <input onChange={props.handleChange}/>
            {props.users.map((item, index) => (
                <ul className='indent' key={index}>{item.name}</ul>
            ))}
        </div>)
};

export default UserList;
