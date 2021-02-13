import React, { Component } from 'react';
class TableDaily extends Component {
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
        <div>
        <div className="isi">
        <div className="table1">
            <table cellSpacing="1" cellPadding="8" border="4" id="table-id">
                <thead>
                    <tr>
                        <th className="tNo">idTransaction</th>
                        <th className="tIdTransaction">idTransaction</th>
                        <th className="tglTransaction">tglTransaction</th>
                        <th className="namaMember">namaMember</th>
                        <th className="kendaraan">kendaraan</th>
                        <th className="nomorPlat">nomorPlat</th>
                        <th className="tAction">ACTION</th>
                    </tr>
                </thead>

                <tbody className="bodyTable" id="bodyTable">
                {
            this.props.dailyParkir.map((data, idx) => {
                return (
                    <tr key={idx}>
                        <td>{idx+1}</td>
                        <td>{data.idTransaction}</td>
                        <td>{data.tglTransaction}</td>
                        <td>{data.namaMember}</td>
                        <td>{data.kendaraan}</td>
                        <td>{data.nomorPlat}</td>
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
    </div>
        );
    }
}
 
export default TableDaily ;