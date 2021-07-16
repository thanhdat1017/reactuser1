import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state={
            trangThaiChinhSua:false
        }
    }
    thayDoiTrangThai=()=>{
        this.setState({
            trangThaiChinhSua:!this.state.trangThaiChinhSua
        });
    };
    hienthiNut=()=>{
        if(this.state.trangThaiChinhSua===true){
            return <button onClick={()=>this.thayDoiTrangThai()} className="btn btn-block btn-outline-secondary">Đóng Lại</button>;
            // nếu không có ()=>this trong onClick thì nó chạy lun không cần click nút sẽ gây ra lỗi cho server
        }
        else{
            return <button onClick={()=>this.thayDoiTrangThai()} className="btn btn-block btn-outline-info">Thêm Mới</button>;
        }
    };
    hienThiForm=()=>{
        if(this.state.trangThaiChinhSua===true){
            return(
                <div className="card border-primary mb-3 mt-2">
                        <div className="card-header">Thêm Mới User vào hệ thống</div>
                        <div className="card-body text-primary">
                            <div className="form-group">
                                <label >Tên User</label>
                                <input type="text" className="form-control"  aria-describedby="helpId" placeholder="Tên User" />
                            </div>
                            <div className="form-group">
                                <label >Điện Thoại</label>
                                <input type="text" className="form-control"  aria-describedby="helpId" placeholder="Điện Thoại" />
                            </div>
                            <div className="form-group">
                                <label >Phân Quyền</label>
                                <select className="custom-select">
                                    <option >Chọn Quyền</option>
                                    <option>Admin</option>
                                    <option>Moderator</option>
                                    <option>Normal</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-block btn-primary">Thêm Mới</button>
                            </div>
                        </div>
                </div>
            )
        }
        
    }
    render() {
        // console.log(this.props.hienThiForm);
        return (
            <div className="col-3">
                <div className="card text-left">
                    {this.hienthiNut()} 
                    {/* this.hienthiNut() Chạy lun không cần click */}
                    {this.hienThiForm()}
                </div>
                {/* end col-3 */}
                {/* </div> end row */}
            </div>
        );
    }
}

export default AddUser;