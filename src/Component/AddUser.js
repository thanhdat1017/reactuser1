import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:"",
            name:"",
            tel:"",
            permission:""
        }
    }
    
    isChange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        // console.log(name);
        // console.log(value);
        this.setState({
            [name]:value
        })
        //package to item
        var item={};
        item.id=this.state.id;
        item.name=this.state.name;
        item.tel=this.state.tel;
        item.permission=this.state.permission;
        //console.log(item);
    }
    kiemTraTrangThai=()=>{
        if(this.props.hienThiForm===true){
            return(
                <div className="col">
                   <form>
                        <div className="card border-primary mb-3 mt-2">
                                <div className="card-header">Thêm Mới User vào hệ thống</div>
                                <div className="card-body text-primary">
                                    <div className="form-group">
                                        <label >Tên User</label>
                                        <input onChange={(event)=>this.isChange(event)} name="name" type="text" className="form-control"  aria-describedby="helpId" placeholder="Tên User" />
                                    </div>
                                    <div className="form-group">
                                        <label >Điện Thoại</label>
                                        <input onChange={(event)=>this.isChange(event)} name="tel" type="text" className="form-control"  aria-describedby="helpId" placeholder="Điện Thoại" />
                                    </div>
                                    <div className="form-group">
                                        <label >Phân Quyền</label>
                                        <select onChange={(event)=>this.isChange(event)} name="permission" className="custom-select">
                                            <option >Chọn Quyền</option>
                                            <option value={1}>Admin</option>
                                            <option value={2}>Moderator</option>
                                            <option value={3}>Normal</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <input type="reset" onClick={(name,tel,permission)=>this.props.add(this.state.name,this.state.tel,this.state.permission)} className="btn btn-block btn-primary" value="Thêm Mới" />
                                    </div>
                                </div>
                        </div>
                    </form>
                </div> 
            )
        }
    }

    render() {
        // console.log(this.props.hienThiForm);
        //console.log(this.state);
        return (
           
                <div className="card text-left">
                    {this.kiemTraTrangThai()}
                </div>
            
        );
    }
}

export default AddUser;