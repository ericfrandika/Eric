import React, { Component } from 'react';
import Form from './component/form/index'
import Table from './component/Table/'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      dataBuah:[]
     }  
  }

  Submit = (newDatabuah) => {
    const { namaBuah , stockBuah, hargaBuah } = newDatabuah
    let newBuah = this.state.dataBuah
    newBuah.push({namaBuah ,stockBuah,hargaBuah})
      this.setState({
        dataBuah : newBuah
      })
    }


    hapus = (index) => {
      let newBuah = this.state.dataBuah
      newBuah.splice(index, 1)
      this.setState({
        dataBuah: newBuah
      })
    }

  render() { 
    return ( 
    <>
    <Form save={this.Submit}/>
    <Table deleteData={this.hapus} kirimDatabuah={this.state.dataBuah}/>
    </> );
  }
}
 
export default App;
