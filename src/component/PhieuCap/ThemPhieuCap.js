import React, { Component } from 'react';
import '../PhieuCap/style.css';
import Checkbox from '@mui/material/Checkbox';

//code giao diện load danh sách phiếu cấp trong này

class ThemPhieuCap extends Component {
    render() {
        return (
            <>
            <div className="phieucap__header">
                <div className="phieucap__header__title">
                    <h2 className="phieucap__header__title">Lập Phiếu Cấp VPP</h2>
                </div>
                <div className="phieucap__header__link">
                    <a href>Kiểm duyệt phiếu cấp</a>
                </div>
            </div>
            <div className="them__body">
                <div className="them__body__title">
                    <h1>PHIẾU CẤP VPP</h1>
                </div>
                <div className="them__body__thongtinchung">
                    <div className="them__body__thongtinchung__title">
                        <span>Thông Tin Chung</span>
                    </div>
                    <div className="them__body__form form-group row">
                        <div className="form-field">
                            <input type="text" className="form-input" placeholder=" "></input>
                            <label for="name" className="form-label">Tên nhân viên</label>
                        </div>
                        <div className="form-field">
                            <input type="date" className="form-input" placeholder=" "></input>
                            <label for="name" className="form-label">Ngày tạo phiếu</label>
                        </div>
                        <div className="form-field">
                            <input type="text" className="form-input" placeholder=" "></input>
                            <label for="name" className="form-label">Tên phòng ban</label>
                        </div>
                    </div>
                    <br/>
                    <div className="them__body__form2">
                        <div className="form-field">
                            <input type="text" className="form-input col-sm-10" placeholder=" "></input>
                            <label for="name" className="form-label">Tên VPP</label>
                        </div>
                        <div className="form-field">
                            <input type="number" className="form-input" placeholder=" "></input>
                            <label for="name" className="form-label">Số lượng yêu cầu</label>
                        </div>
                        <div className="form-field">
                            <input type="number" className="form-input" placeholder=" "></input>
                            <label for="name" className="form-label">Số lượng tồn</label>
                        </div>
                        <div className="form-field">
                            <input type="text" className="form-input" placeholder=" "></input>
                            <label for="name" className="form-label">Đơn vị tính</label>
                        </div>
                        <div className="form-field">
                            <input type="text" className="form-input" placeholder=" "></input>
                            <label for="name" className="form-label">Quy cách/ Đặc tính</label>
                            
                        </div>
                        <div className="form-field">
                            <button className="btn btn-success "><i class="fa fa-plus-circle"></i> Add</button>
                        </div>
                    </div>
                </div>
                <div className="them__body__timkiem">
                    <div className="phieucap__timkiem__search themphieucap--timkiem">
                        <span className="phieucap__timkiem__title">Tìm kiếm</span>
                        <div className="phieucap__timkiem__search">
                            <button type="submit" className="phieucap__timkiem__search--searchButton">
                                <i className="phieucap__timkiem__icon fa fa-search" />
                            </button>
                            <input type="text" className="phieucap__timkiem__search--searchTerm" placeholder="..." />
                        </div>
                    </div>
                    <div className="them__body__timkiem__submit">
                        <button className="btn btn-info"><i class="fa fa-plus-circle"></i> Submit</button>
                    </div>
                </div>

                <div className="them__body__danhsachvpp">
                    <div className="them__body__thongtinchung__title">
                        <span>Danh sách VPP</span>
                    </div>
                    <table className="table table-borderless table-hover">
                        <thead>
                            <tr>
                            <th scope="col"><Checkbox/></th>
                            <th scope="col">STT</th>
                            <th scope="col">Tên VPP</th>
                            <th scope="col">Số lượng</th>
                            <th scope="col">Đơn vị tính</th>
                            <th scope="col">Quy cách/ Đặc tính</th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row"><Checkbox/></th>
                            <td>1</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>
                                <a href><i class="fa fa-edit"></i></a>
                                &nbsp;&nbsp;&nbsp;
                                <a href><i class="fa fa-trash"></i></a>
                            </td>
                            </tr>
                            <tr>
                            <th scope="row"><Checkbox/></th>
                            <td>2</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td><a href><i class="fa fa-500px"></i></a></td>
                            </tr>
                            <tr>
                            <th scope="row"><Checkbox/></th>
                            <td>3</td>
                            <td>Larry the Bird</td>
                            <td>@twitter</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td><a href><i class="fa fa-500px"></i></a></td>
                            </tr>
                        </tbody>
                    </table>
                        
                </div>
                

            </div>
            </>
        );
    }
}
export default ThemPhieuCap;