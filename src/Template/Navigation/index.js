import React, { Component } from 'react';
import { Link } from "react-router-dom"

import  Menu  from "../../component/menu/"

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        console.log("nav:", this.props.page);
        const { changePage } = this.props
        return (
            <div>
                <Link to="/">
                    <Menu redirect={() => changePage("home")}>Home</Menu>
                </Link>
                <Link to="/about">
                    <Menu redirect={() => changePage("about")}>About Us</Menu>
                </Link>
                <Link to="/DataDailyParkir">
                    <Menu redirect={() => changePage("DataDaily")}>Daily Parkir</Menu>
                </Link>
                <Link to="/DataParkirMember">
                    <Menu redirect={() => changePage("DataParkirMember")}>Member</Menu>
                </Link>
                <Link to="/login">
                    <Menu redirect={() => changePage("login")}>Login</Menu>
                </Link>
            </div>
        );
    }
}

export default Nav;