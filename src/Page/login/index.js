import React, { Component } from 'react';
import { Redirect } from "react-router-dom"


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        console.log("statuslogin:", this.props.statusLogin);
        if (this.props.statusLogin)
            return <Redirect to="/" />

        return (
            <button onClick={this.props.doLogin}>Login</button>
        );
    }
}

export default Login;