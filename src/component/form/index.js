import React, { Component } from 'react';
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            namaBuah :"",
            stockBuah:"",
            hargaBuah:"",
         }
    }
    setValue = el => {
        this.setState({
            [el.target.name] : el.target.value
        })
    }

    render() { 
        const { namaBuah , stockBuah, hargaBuah } = this.state
        return ( 
            <>
        <div className="formDataBuah">
        <h2>FORM BUAH</h2>
        <hr/>
        <div className="field">
             <label>Nama Buah</label>
             <input type="text" className="namaBuah" name="namaBuah" id="namaBuah" onChange={this.setValue}/>
        </div>
        <div class="field">
            <label>Stock Buah</label>
            <input type="number" className="stockBuah" name="stockBuah" onChange={this.setValue} id="stockBuah"/>
        </div>
        <div class="field">
            <label>Harga Buah</label>
            <input type="number" className="hargaBuah" name="hargaBuah" onChange={this.setValue} id="hargaBuah"/>
        </div>
        <button className="button1" onClick={()=>this.props.save({ namaBuah , stockBuah, hargaBuah})} id="formBuah">Submit</button>
         </div>
            </>
         );
    }
}
 
export default Form;