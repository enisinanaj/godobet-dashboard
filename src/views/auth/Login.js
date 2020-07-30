import React, { Component } from 'react';

class Login extends Component {

    state = {
        formLogin: {
            email: '',
            password: ''
        }
    }

    /* Simplify error check */
    hasError = (formName, inputName, method) => {
        return  this.state[formName] &&
                this.state[formName].errors &&
                this.state[formName].errors[inputName] &&
                this.state[formName].errors[inputName][method]
    }

    render() {
        return (
            <div className="block-center mt-4 wd-xl">
                
            </div>
        );
    }
}

export default Login;
