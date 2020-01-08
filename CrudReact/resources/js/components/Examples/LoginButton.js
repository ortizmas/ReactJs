import React, { Component } from 'react';

class LoginButton extends Component {
    async handleClick() {
        console.log('this is:', this);
    }

    render() {
        return (
            // returna this undefined
            // <button onClick={this.handleClick}>
            //     Clique Aqui
            // </button>

            <button className="btn btn-primary" onClick={(e) => this.handleClick(e)}>
                Click me
            </button>
        );
    }  
}

export default LoginButton;