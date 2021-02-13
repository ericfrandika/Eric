import React, { Component } from 'react';
import DataMember from '../../dataParkir/dataMember/'
class DataParkirMember extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
             <div>
             <DataMember/>
            </div>  );
    }
}
 
export default DataParkirMember;