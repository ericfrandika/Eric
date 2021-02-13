import React, { Component } from 'react';

class InputMember extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nama: "",
            kendaraan: "",
            nomorPlat: "",
            expired: "",
        }
    }
    setValue = el => {
        this.setState({
            [el.target.name] : el.target.value
        })
    }
    handleSubmit1 = (event) => {
        // console.log(this.state);
        this.setState({
            nama: "",
            kendaraan: "",
            nomorPlat: "",
            expired: "",
           
        })
        event.preventDefault()
    }
    render() {
        if("nama" in this.props.editData){
            this.setState({
                nama:this.props.editData.nama,
                kendaraan:this.props.editData.kendaraan,
                nomorPlat: this.props.editData.nomorPlat,
                expired:this.props.editData.expired,   
            })
            this.props.reset();
        }
        const { nama, kendaraan ,  nomorPlat , expired} = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit1}>

                    <div className="countainer">
                        <div className="form">
                            <div className="inputData">Table Member<hr /> </div>
                           
                            <div className="field">
                                <label className="label" >NAMA</label>
                                <input className="nama" name="nama" id="nama" value={nama} placeholder="Masukkan Nama Anda" onChange={this.setValue} />
                            </div>

                            <div className="field">
                                <label className="label">Kendaraan</label>
                                <input className="kendaraan" name="kendaraan" type="text" value={kendaraan}id="kendaraan" placeholder="Masukkan Nama Kendaraan" onChange={this.setValue} />
                            </div>
                            <div className="field">
                                <label className="label">nomorPlat</label>
                                <input className="nomorPlat" name="nomorPlat" type="text" value={nomorPlat} onChange={this.setValue} id="nomorPlat" placeholder="Masukkan NomorPlat " />
                            </div>
                            <div className="field">
                                <label className="label">Expired</label>
                                <input className="expired" name="expired" value={expired} type="date" id="expired" placeholder="Masukkan Nama Kendaraan" onChange={this.setValue} />
                            </div>

                            <div>
                                <button className="button1" id="button1" onClick={() => this.props.save({ nama, kendaraan ,  nomorPlat , expired })} type="submit" value="Submit" >SUBMIT</button>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        );
    }
}

export default InputMember ;