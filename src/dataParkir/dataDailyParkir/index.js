import React, { Component } from 'react';
import TableDaily from "../dataDailyParkir/tableDaily/"
import InputDaily from "../dataDailyParkir/inputDaily/"
class DataDailyParkir extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            dailyParkir:[],
            act :0,
            parkirEdit:{},
            index:""
          }
    }
    Submit = (dataParkir) => {

        const { idTransaction, tglTransaction ,nomorPlat , namaMember , kendaraan } = dataParkir
        let newDailyParkir = this.state.dailyParkir
        if (this.state.act === 0) {
        if(idTransaction !="" && tglTransaction !="" 
        && nomorPlat !="" && namaMember  !="" 
        && kendaraan !=""){
        newDailyParkir.push({ idTransaction, nomorPlat, tglTransaction ,  namaMember , kendaraan })
        this.setState({
          dailyParkir: newDailyParkir
        })
        alert('Berhasil !! Data Berhasil Diinput')
      }
      else{
        alert('Masukkan Data anda')
      }
    }
      else{
        let index = this.state.index;
        newDailyParkir[index].idTransaction = idTransaction;
        newDailyParkir[index].tglTransaction = tglTransaction;
        newDailyParkir[index].nomorPlat = nomorPlat;
        newDailyParkir[index].namaMember = namaMember;
        newDailyParkir[index].kendaraan = kendaraan;
        this.setState({
          dailyParkir: newDailyParkir,
          act: 0
        })
        alert('Data Berhasil DiUpdate..')
      }
    }

      hapus = (index) => {
        let newDailyParkir = this.state.dailyParkir
        newDailyParkir.splice(index, 1)
        this.setState({
          dailyParkir: newDailyParkir
        })
      }
      edit = (index) => {
        this.setState({
          act: 1,
          index: index
        });
        const userEdit = this.state.dailyParkir[index]
        this.setState({
          parkirEdit : userEdit
        })
            }
      reset = ()=> {
        this.setState({
          parkirEdit :{}
        })
      }


    render() { 
        return ( 
            <>
            <InputDaily save={this.Submit} editData={this.state.parkirEdit} reset={this.reset}/> 
            <TableDaily deleteTable={this.hapus} dailyParkir={this.state.dailyParkir} deleteData={this.hapus} updateData={this.edit}  />
            </>
         );
    }
}
 
export default DataDailyParkir;