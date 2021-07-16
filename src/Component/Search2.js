import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div className="col-12">
                <div className="form-group">
                    <div className="btn-group">
                        <input type="text" className="form-control otimkiem"  placeholder="Nhập từ khóa" />
                        <button className="btn-info timkiem">Tìm Kiếm</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;