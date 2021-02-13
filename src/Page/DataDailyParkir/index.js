import React, { Component } from 'react';
import DataDailyParkir from '../../dataParkir/dataDailyParkir/index'
class DataDaily extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
            <DataDailyParkir/>
         </>
         );
    }
}
 
export default DataDaily ;