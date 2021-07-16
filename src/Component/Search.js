import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state={
            tempValue:'',
            //userObj:{}
        }
    }
    
    isChange=(event)=>{
        console.log(event.target.value);
        this.setState({
            tempValue:event.target.value
        })
        //tìm kết quả ngay lập tức khi gõ từ khóa tìm kiếm
        this.props.checkConnect(this.state.tempValue);
    }
    hienThiNut=()=>{
        if(this.props.hienThiForm===true){
            return <button onClick={this.props.ketnoi} className="btn btn-block btn-outline-secondary">Đóng Lại</button>
        }
        else{
            return <button onClick={this.props.ketnoi} className="btn btn-block btn-outline-info">Thêm Mới</button>
        }
    }
    //props.changeEditUserStatus()
    isShowEditForm=()=>{
        if(this.props.editUserStatus===true){
            return <EditUser getUserEditInfo={(info)=>this.getUserEditInfo(info)} userEditObject={this.props.userEditObject} changeEditUserStatus={()=>this.props.changeEditUserStatus()}></EditUser>
        }
    }
    getUserEditInfo=(info)=>{
        // this.setState({
        //     userObj:info
        // })
        //console.log(info);
        this.props.getUserEditInfoForApp(info); // hoac nhan info cung dc thay vi this.state.userObj
    }
    render() {
        return (
            <div className="col-12">
                <div className="row">
                    {this.isShowEditForm()}
                </div>
                <div className="form-group">
                    <div className="btn-group">
                        <input onChange={(event)=>this.isChange(event)} type="text" className="form-control otimkiem"  placeholder="Nhập từ khóa" />
                        <button onClick={(dl)=>this.props.checkConnect(this.state.tempValue)} className="btn-info timkiem">Tìm Kiếm</button>
                    </div>
                    {this.hienThiNut()}
                    
                </div>
            </div>
        );
    }
}

export default Search;