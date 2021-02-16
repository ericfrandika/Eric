import React, { Component } from 'react';
class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    hapus=(index)=>{
        this.props.deleteData(index)
    }
    render() { 
        return ( 
            <>
            
  <div className="isi">
  <div className="table1">
      <table cellspacing="1" cellpadding="8" border="4" id="table-id">
          <thead>
              <tr>
                  <th className="tNo">ID</th>
                  <th className="tNama">NAMA</th>
                  <th className="tHarga">HARGA</th>
                  <th className="tStock">STOCK</th>
                  <th className="tAction">ACTION</th>
              </tr>
          </thead>
          <tbody id="bodyTable"></tbody>
          {
                        this.props.kirimDatabuah.map((data, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>{idx+1}</td>
                                    <td>{data.namaBuah}</td>
                                    <td>{data.stockBuah}</td>
                                    <td>{data.hargaBuah}</td>
                                    <td>
                                    <button className="hapus" type="button" onClick={()=>this.hapus(idx)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    } 
          </table>
</div>
</div>
</>
         );
    }
}
 
export default Table ;