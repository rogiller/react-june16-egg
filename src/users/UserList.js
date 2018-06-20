import React from 'react';
import "./UserList.css";

const UserList = (props) => {
    return (
        <div className="userList">
            <h3>{props.displayText}</h3>
            <input onChange={props.handleChange}/>
            <br/>
            <br/>
            <table>
                <tbody>
                    <tr className="userListHeader">
                        <td>Name</td>
                        <td>User Name</td>
                        <td>Email</td>
                        <td>Phone</td>
                        <td>Website</td>
                    </tr>
                    {props.users.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.website}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>)
};

export default UserList;
