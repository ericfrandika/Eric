import React, { Component } from 'react';
class TableMember extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    edit=(index)=>{
        this.props.updateData(index)
    }
    hapus=(index)=>{
        this.props.deleteData(index)
    }
    render() { 
        return ( 
        <>
        <div className="isi">
        <div className="table1">
            <table cellSpacing="1" cellPadding="8" border="4" id="table-id">
                <thead>
                    <tr>
                        <th className="tNo">No</th>
                        <th className="tNama">Nama</th>
                        <th className="tKendaraan">Kendaraan</th>
                        <th className="tNomorPlat">nomorPlat</th>
                        <th className="tUmur">Expired</th>
                        <th className="tAction">ACTION</th>
                    </tr>
                </thead>

                <tbody className="bodyTable" id="bodyTable">
                {
            this.props.member.map((data, idx) => {
                return (
                    <tr key={idx}>
                        <td>{idx+1}</td>
                        <td>{data.nama}</td>
                        <td>{data.kendaraan}</td>
                        <td>{data.nomorPlat}</td>
                        <td>{data.expired}</td>
        
                        <td className="tAction">
                        <button className="edit" type="button" onClick={()=>this.edit(idx)} > Edit</button>
                        <button className="hapus" type="button" onClick={()=>this.hapus(idx)}>Delete</button>
                        </td>

                    </tr>
                )
            })
        } 
                </tbody>
            </table>
        </div>
    </div> 
    </>
    );
    }
}
 
export default TableMember;