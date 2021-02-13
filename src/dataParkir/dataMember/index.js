import React, { Component } from 'react';
import TableMember from "../dataMember/tableMember"
import InputMember from "../dataMember/inputMember/"
class DataMember extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            member:[],
            act :0,
            parkirEdit:{}
          }
    }
    Submit = (dataMember) => {
        const { nama, kendaraan ,  nomorPlat , expired } = dataMember
        let newMember = this.state.member
        if (this.state.act === 0) {
        newMember.push({ nama, kendaraan, nomorPlat, expired })
        this.setState({
          member: newMember
        })
        alert('Berhasil !! Data Berhasil Diinput')
      }
      else{
        let index = this.state.index;
        newMember[index].nama = nama;
        newMember[index].kendaraan = kendaraan;
        newMember[index].nomorPlat = nomorPlat;
        newMember[index].expired = expired;
        this.setState({
          member: newMember,
          act: 0
        })
        alert('Data Berhasil DiUpdate..')
      }
    }
    


      

      hapus1 = (index) => {
        let newMember = this.state.member
        newMember.splice(index, 1)
        this.setState({
          member: newMember
        })
      }
    
      edit1 = (index) => {
        this.setState({
          act: 1,
          index: index
        });
        const userEdit = this.state.member[index]
        this.setState({
          parkirEdit : userEdit
        })
        console.log(index+" ini index")
      }
      reset1 = ()=> {
        this.setState({
          parkirEdit :{}
        })
      }
    render() { 
        return ( 
            <>
            <InputMember save={this.Submit} editData={this.state.parkirEdit} reset={this.reset1}/> 
            <TableMember member={this.state.member} deleteData={this.hapus1} updateData={this.edit1} />
            </>
         );
    }
}
 
export default DataMember;