import React, { Component } from 'react';

class TableDataRow extends Component {
    permissionShow=()=>{
        if(this.props.permission===1){ 
            return "Admin";
        }
        else{
            if (this.props.permission===2)
            {
                return "Moderator";
            }
            else{
                return "Normal User";
            }
        }
    }
    editClick=()=>{
        this.props.editFunClick();
        this.props.changeEditUserStatus();
    }
    deleteButtonClick=(idUser)=>{
        this.props.deleteButtonClick(idUser);
    }
    render() {
        return (

            <tr>
                <td >{this.props.stt+1}</td>
                <td>{this.props.username}</td>
                <td>{this.props.tel}</td>
                <td>{this.permissionShow()}</td>
                <td>
                    <div className="btn-group">
                        <button onClick={()=>{this.editClick()}} className="btn-warning sua"> <i className="fa fa-edit" /> Sửa</button>
                        <button onClick={(idUser)=>this.deleteButtonClick(this.props.id)} className="btn-danger xoa"><i className="fa fa-edit" />Xóa</button>
                    </div>
                </td>
            </tr>

        );
    }
}

export default TableDataRow;