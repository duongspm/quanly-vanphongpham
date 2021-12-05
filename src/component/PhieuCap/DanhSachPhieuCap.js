import React, { Component } from 'react';
import '../PhieuCap/style.css';
import Checkbox from '@mui/material/Checkbox';
//code giao diện load danh sách phiếu cấp trong này

class LoadPhieuCap extends Component {
    render() {
        return (
            <>
            <div className="phieucap">
                <div className="phieucap__header">
                    <div className="phieucap__header__title">
                        <h2 className="phieucap__header__title">Phiếu cấp VPP</h2>
                    </div>
                    <div className="phieucap__header__link">
                        <a href>Kiểm duyệt phiếu cấp</a>
                    </div>
                </div>
                <div className="phieucap__timkiem">
                    <div className="phieucap__timkiem__search">
                        <span className="phieucap__timkiem__title">Tìm kiếm</span>
                        <div className="phieucap__timkiem__search">
                            <button type="submit" className="phieucap__timkiem__search--searchButton">
                                <i className="phieucap__timkiem__icon fa fa-search" />
                            </button>
                            <input type="text" className="phieucap__timkiem__search--searchTerm" placeholder="..." />
                        </div>
                    </div>

                    <div className="phieucap__timkiem__search">
                        <span className="phieucap__timkiem__title">Từ:</span>
                        <div className="phieucap__timkiem__search--date">
                            <input type="date" className="phieucap__timkiem__search--searchTerm--date" placeholder="..." />
                        </div>
                    </div>
                    <div className="phieucap__timkiem__search">
                        <span className="phieucap__timkiem__title">Đến:</span>
                        <div className="phieucap__timkiem__search--date">
                            <input type="date" className="phieucap__timkiem__search--searchTerm--date" placeholder="..." />
                        </div>
                    </div>

                    <div className="phieucap__timkiem--button">
                        <button className="phieucap__timkiem__button">
                        <i class="fa fa-plus-circle"></i>
                            Add
                        </button>
                    </div>
                </div>
                {/* input animation */}
                <div className="form-field">
                    <input type="text" className="form-input" placeholder=" "></input>
                    <label for="name" className="form-label">Name</label>
                </div>
                {/* input animation */}
                <div className="phieucap__table">
                    <table className="table table-borderless table-hover">
                        <thead>
                            <tr>
                            <th scope="col"><Checkbox/></th>
                            <th scope="col">Mã phiếu</th>
                            <th scope="col">Ngày tạo phiếu</th>
                            <th scope="col">Tên nhân viên</th>
                            <th scope="col">Phòng</th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row"><Checkbox/></th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td><a href><i class="fa fa-500px"></i></a></td>
                            </tr>
                            <tr>
                            <th scope="row"><Checkbox/></th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@mdo</td>
                            <td><a href><i class="fa fa-500px"></i></a></td>
                            </tr>
                            <tr>
                            <th scope="row"><Checkbox/></th>
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
export default LoadPhieuCap;