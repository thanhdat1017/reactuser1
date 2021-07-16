import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:this.props.userEditObject.id,
            name:this.props.userEditObject.name,
            tel:this.props.userEditObject.tel,
            permission:this.props.userEditObject.permission,
        }
    }
    
    isChange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        this.setState({
            [name]:value
        })
    }
    saveButton=()=>{
        this.props.changeEditUserStatus();//ẩn form
        var info={}
        info.id=this.state.id;
        info.name=this.state.name;
        info.tel=this.state.tel;
        info.permission=this.state.permission;
        this.props.getUserEditInfo(info); //lấy thông tin user đã đổi
    }
    render() {
        //console.log(this.state);
        return (
            <div className="col-12">
                   <form>
                        <div className="card text-white bg-secondary border-primary mb-3 mt-2">
                                <div className="card-header text-center">Sửa Thông Tin User</div>
                                <div className="card-body text-primary">
                                    <div className="form-group">
                                        <label >Tên User</label>
                                        <input onChange={(event)=>this.isChange(event)} defaultValue={this.props.userEditObject.name} name="name" type="text" className="form-control"  aria-describedby="helpId" placeholder="Tên User" />
                                    </div>
                                    <div className="form-group">
                                        <label >Điện Thoại</label>
                                        <input onChange={(event)=>this.isChange(event)} defaultValue={this.props.userEditObject.tel} name="tel" type="text" className="form-control"  aria-describedby="helpId" placeholder="Điện Thoại" />
                                    </div>
                                    <div className="form-group">
                                        <label >Phân Quyền</label>
                                        {/* trong html thì thuoc tinh defaultValue dạt o option con react js dat o select */}
                                        <select onChange={(event)=>this.isChange(event)} defaultValue={this.props.userEditObject.permission} name="permission" className="custom-select">
                                            <option >Chọn Quyền</option>
                                            <option value={1}>Admin</option>
                                            <option value={2}>Moderator</option>
                                            <option value={3}>Normal</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <input onClick={()=>this.saveButton()} type="button" className="btn btn-block btn-danger" value="Lưu Thông Tin" />
                                    </div>
                                </div>
                        </div>
                    </form>
                </div> 
        );
    }
}

export default EditUser;