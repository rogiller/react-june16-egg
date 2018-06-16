import React from 'react';
import "./UserListHeader.css";

const UserListHeader = (props) => {
    if (props.displayText) return (
        <div className="userListHeader">
            <h3>{props.displayText}</h3>
        </div>);
    return (<h1 className="nothingStyle">NONE</h1>);
};

export default UserListHeader;
