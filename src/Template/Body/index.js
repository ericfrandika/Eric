import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom"
import Login from "../../Page/login"
import { About, DataParkirMember, DataDaily, Home } from "../../Page/index"
class Body extends Component {
    state = { 
        users: [],
            statusLogin: false
     }

    doLogin = () => {
        this.setState(prevState => ({
            statusLogin: !prevState.statusLogin
        }))
    }
    render() { 
        return (
            <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about">
                <About />
            </Route>
            <Route path="/DataDailyParkir">
                <DataDaily/>
            </Route>
            <Route path="/DataParkirMember">
                <DataParkirMember/>
            </Route>
            <Route path="/login">
                    <Login statusLogin={this.state.statusLogin} doLogin={this.doLogin} />
             </Route>
        </Switch>
          );
    }
}
 
export default Body;
