import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom"

// import Header from "./template/header"
// import Nav from "./template/navigation"
// import Footer from "./template/footer"

import Header from "./Template/Header/"
import Footer from "./Template/Footer/"
import Nav from "./Template/Navigation/"
import Body from "./Template/Body/"
import "./App.css"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "about",
   
    }
  }

  goToPage = page => {
    this.setState({
      currentPage: page
    })
  }

  render() {
    return (
      <Router>
        <Header />
        <Nav page={this.state.currentPage} changePage={this.goToPage} />
        <Body page={this.state.currentPage} />
        <Footer />
      </Router>
    );
  }
}

export default App;