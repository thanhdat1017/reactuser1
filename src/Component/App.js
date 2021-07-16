import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './Data.json';
import { v1 as uuidv1 } from 'uuid';
class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            hienThiForm:false,
            data:DataUser,
            searchText:'',
            editUserStatus:false,
            userEditObject:{}
        }
    }
    
    componentWillMount() {
        //kiểm tra xem có localStorage hay chưa
        if(localStorage.getItem('userData')===null)
        {
            //localStorage lưu ở dạng chuổi còn DataUser ở dạng mảng nên phải chuyển về chuổi bằng hàm stringify
            localStorage.setItem('userData',JSON.stringify(DataUser));
        }
        else
        {
            var temp=[];
            temp=JSON.parse(localStorage.getItem('userData'));
            this.setState({
                data:temp
            })
        }
        //console.log(localStorage.getItem('userData'));
    }
    
    getNewUserData=(name,tel,permission)=>{
        var item={};
        item.id=uuidv1();
        item.name=name;
        item.tel=tel;
        item.permission=parseInt(permission);
        var items=this.state.data;
        items.push(item);
        //console.log('ket noi thanh cong');
        this.setState({
            data:items
        })
        //console.log(this.state.data);
        //đẩy dữ liệu vào localStorage nếu có mysql thi đẩy dữ liệu vào mysql
        localStorage.setItem('userData',JSON.stringify(items));
    }
    editUser=(user)=>{
        console.log("da ket noi");
        this.setState({
            userEditObject:user
        })
        //console.log(user);
    }
    doiTrangThai=()=>{
        this.setState({
            hienThiForm:!this.state.hienThiForm
        })
    }
    getTextSearch=(dl)=>{
        this.setState({
            searchText:dl
        })
        //console.log('du lieu bo nhan duoc la:'+this.state.searchText);
    }
    changeEditUserStatus=()=>{
        this.setState({
            editUserStatus:!this.state.editUserStatus
        })
    }
    // thongBao=()=>(
    //     alert('Ket Noi Thanh Cong')
    // )
    getUserEditInfoForApp=(info)=>{
        //console.log('thong tin user da sua xong la:'+info.name);
        this.state.data.forEach((value,key)=>{
            if(value.id===info.id){
                value.name=info.name;
                value.tel=info.tel;
                value.permission=parseInt(info.permission);
            }
        })
        //đẩy dữ liệu vào localStorage nếu có mysql thi đẩy dữ liệu vào mysql
        localStorage.setItem('userData',JSON.stringify(this.state.data));
    }
    deleteUser=(idUser)=>{
        //console.log(idUser);
        //hàm filter
        // var arr=[1,2,3];
        // var x=2;
        // arr=arr.filter(item=>item!==x);
        // console.log(arr);
        // var tempData=this.state.data;
        var tempData=this.state.data.filter(item=>item.id!==idUser);
        this.setState({
            data:tempData
        });
        //đẩy dữ liệu vào localStorage nếu có mysql thi đẩy dữ liệu vào mysql
        localStorage.setItem('userData',JSON.stringify(tempData));
    }
    render() {
        // localStorage.setItem("key1","ha ha");
        // console.log(localStorage.getItem("key1"));
        // localStorage.removeItem("key1");
        // console.log(this.state.data);
        var ketqua=[];
        this.state.data.forEach((item)=>{
            // -1 là tìm không thấy còn !== -1 là tìm thấy
            if(item.name.indexOf(this.state.searchText)!==-1){
                ketqua.push(item);
            }
        })
        //console.log(ketqua);
        //localStorage.setItem('userData',JSON.stringify(DataUser));
        return (
            <div>
                <Header></Header>
                <div className="searchForm">
                    <div className="container">
                        <div className="row">
                            <Search getUserEditInfoForApp={(info)=>this.getUserEditInfoForApp(info)} ketnoi={()=>this.doiTrangThai()} hienThiForm={this.state.hienThiForm}
                            checkConnect={(dl)=>this.getTextSearch(dl)} editUserStatus={this.state.editUserStatus} changeEditUserStatus={()=>this.changeEditUserStatus()} userEditObject={this.state.userEditObject}></Search>
                            <TableData dataUser={ketqua} editFun={(user)=>this.editUser(user)} changeEditUserStatus={()=>this.changeEditUserStatus()} deleteUser={(idUser)=>this.deleteUser(idUser)}></TableData>
                            <AddUser add={(name,tel,permission)=>this.getNewUserData(name,tel,permission)} hienThiForm={this.state.hienThiForm}></AddUser>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;