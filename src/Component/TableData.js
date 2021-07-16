import React, { Component } from 'react';
import TableDataRow from './TableDataRow';
class TableData extends Component {
    deleteButtonClick=(idUser)=>{
        this.props.deleteUser(idUser);
    }
    mappingDataUser=()=>this.props.dataUser.map((value,key)=>(
        <TableDataRow deleteButtonClick={(idUser)=>this.deleteButtonClick(idUser)} changeEditUserStatus={()=>this.props.changeEditUserStatus()} editFunClick={(user)=>this.props.editFun(value)} id={value.id} stt={key} username={value.name} tel={value.tel} permission={value.permission} key={key}></TableDataRow>
    ))
    render() {
        //console.log(this.props.dataUser);
        return (
            <div className="col">
                <table className="table  table-inverse table-hover">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Số Điện Thoại</th>
                            <th>Quyền</th>
                            <th>Hành Động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* begin tr */}
                        {
                            this.mappingDataUser()
                        }
                        {/* end tr */}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TableData;