import React from 'react';

function LoginButton(props) {
    return (
      <button className="btn btn-success" onClick={props.onClick}>
        Login
      </button>
    );
}

function LogoutButton(props) {
    return (
      <button className="btn btn-danger" onClick={props.onClick}>
        Logout
      </button>
    );
}

export { LoginButton, LogoutButton };