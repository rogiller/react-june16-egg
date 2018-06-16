import React from 'react';

const UserListHeader = (props) => {
    if (props.displayText) return (
        <div>
            <h3>{props.displayText}</h3>
        </div>);
    return (<h1>NONE</h1>);
};

export default UserListHeader;
