import React, { Component } from 'react';
import "./style.css" 
class InputDaily extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idTransaction: "",
            tglTransaction: "",
            nomorPlat:"",
            namaMember:"",
            kendaraan:"",
        }
    }
    setValue = el => {
        this.setState({
            [el.target.name] : el.target.value
        })
    }
    handleSubmit = (event) => {
        this.setState({
            idTransaction: "",
            tglTransaction: "",
            nomorPlat:"",
            namaMember:"",
            kendaraan:"",
           
        })
        event.preventDefault()
    }
    render() {
        if("idTransaction" in this.props.editData){
            this.setState({
                idTransaction:this.props.editData.idTransaction,
                tglTransaction:this.props.editData.tglTransaction,
                nomorPlat: this.props.editData.nomorPlat,
                namaMember:this.props.editData.namaMember,   
                kendaraan:this.props.editData.kendaraan, 
            })
            this.props.reset();
        }
        const { idTransaction, tglTransaction , nomorPlat , namaMember , kendaraan} = this.state
        return (
            <>
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="countainer">
                        <div className="form">
                            <div className="inputData">TABLE DAILY PARKING<hr /> </div>
                        
                            <div className="field">
                                <label className="label" >idTransaction</label>
                                <input className="id" name="idTransaction" value={idTransaction} id="idTransaction" placeholder="Masukkan id anda" onChange={this.setValue} />
                            </div>

                            <div className="field">
                                <label className="label">tglTransaction</label>
                                <input className="tglTransaction" name="tglTransaction" value={tglTransaction} type="date" id="tglTransaction" placeholder="Masukkan TglTransaction" onChange={this.setValue} />
                            </div>

                            <div className="field">
                                <label className="label">nomorPlat</label>
                                <input className="nomorPlat" name="nomorPlat" type="text" value={nomorPlat} onChange={this.setValue} id="nomorPlat" placeholder="Masukkan NomorPlat " />
                            </div>

                            <div className="field">
                                <label className="label">namaMember</label>
                                <input className="" name="namaMember" type="text" id="namaMember" value={namaMember} placeholder="Masukkan nama Member" onChange={this.setValue} />
                            </div>

                            <div className="field">
                                <label className="label">Kendaraan</label>
                                <input className="kendaraan" name="kendaraan" type="text" id="kendaraan" value={kendaraan}placeholder="Masukkan Nama Kendaraan" onChange={this.setValue} />
                            </div>


                            <div>
                                <button className="button1" id="button1" onClick={() => this.props.save({ idTransaction, tglTransaction , nomorPlat, namaMember , kendaraan })} type="submit" value="Submit" >SUBMIT</button>
                            </div>

                        </div>

                    </div>
                </form>
                </div>
            </>
        );
    }
}

export default InputDaily ;