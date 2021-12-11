import React, { Component } from 'react';
import '../PhieuYeuCauCap/style.css';

class PhieuYeuCauCap extends Component {
    render() {
        return (
            <div className="them">
                <div className="header">
                    <h2>Lập phiếu yêu cầu cấp VPP</h2>
                </div>
                <div>
                    <h3>Phiếu Yêu Cầu Cấp VPP</h3>
                    <div className="info_form">
                        <h4>Thông tin chung</h4>
                        <div className="row1">
                            <div className="info_name">
                                <label>Tên nhân viên</label>
                                <input type="text" />
                            </div>
                            <div className="info">
                                <label>Ngày tạo phiếu</label>
                                <input type="date" />
                            </div>
                            <div className="info">
                                <label>Tên phòng ban</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="row2">
                            <div className="info">
                                <label>Tên VPP</label>
                                <input type="text" />
                            </div>
                            <div className="info">
                                <label>Số lượng yêu cầu</label>
                                <input type="text" />
                            </div>
                            <div className="info">
                                <label>Đơn vị tính</label>
                                <input type="text" />
                            </div>
                            <div className="info">
                                <label>Quy cách / Đặc tính</label>
                                <input type="text" />
                            </div>
                            <button className="btn btn-success btn-add"><i className="fa fa-plus-circle"></i>Add</button>
                        </div>
                    </div>
                    <div className="submit">
                        <div className="search">
                            <span><i className="fa fa-search"></i></span>
                            <input type="text" placeholder="Tên VPP..."/>
                        </div>
                        <button className="btn btn-submit"><i className="fa fa-plus-circle"></i>Submit</button>
                    </div>
                    <div className="list-vpp">
                        <h4>Danh sách VPP</h4>
                        <table class="table table-borderless table-hover">
                            <thead>
                                <tr>
                                    <th className="check">
                                        <label class="i-checks m-b-none">
                                            <input type="checkbox" /><i></i>
                                        </label>
                                    </th>
                                    <th className="stt">STT</th>
                                    <th className="tenvpp">Tên VPP</th>
                                    <th className="soluong">Số lượng</th>
                                    <th className="donvi">Đơn vị tính</th>
                                    <th className="quycach">Quy cách / Đặc tính</th>
                                    <th className="action"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="check">
                                        <label class="i-checks m-b-none"><input type="checkbox" name="post[]" /><i></i></label>
                                    </td>
                                    <td className="stt">1</td>
                                    <td className="tenvpp">Bút bi</td>
                                    <td className="soluong">20</td>
                                    <td className="donvi">Cái</td>
                                    <td className="quycach">Bút bi màu xanh</td>
                                    <td className="action">
                                        {/* <Link className="btn btn-outline-success m-1"  title="Edit"> */}
                                            <i className="fa fa-edit"></i>
                                        {/* </Link> */}

                                        {/* <button className="btn btn-danger" title="Delete"> */}
                                            <i className="fa fa-trash-o"></i>
                                        {/* </button> */}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
export default PhieuYeuCauCap;