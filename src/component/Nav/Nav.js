import React, { Component } from 'react'
import {
    NavLink,
} from "react-router-dom";
import '../Nav/style.css'
export default class Nav extends Component {
    render() {
        return (
            <>
            <nav id="navbar" className="navbar2">
                <ul>
                    <li><a className="nav-link scrollto"><NavLink to="/" exact={true}>Trang chủ</NavLink></a></li>
                    <li><a className="nav-link scrollto"><NavLink to="/danh-sach-phong-ban">Phòng ban</NavLink></a></li>
                    <li><a className="nav-link scrollto"><NavLink to="/danh-sach-phieu-nhap">Phiếu nhập VPP</NavLink></a></li>
                    <li><a className="nav-link scrollto"><NavLink to="/danh-sach-phieu-cap">Phiếu cấp VPP</NavLink></a></li>
                    <li><a className="nav-link scrollto">Danh sách VPP</a></li>
                    <li className="dropdown"><a href="#"><span>Cài đặt</span> <i className="bi bi-chevron-down" /></a>
                    <ul>
                        <li><a href="#">Drop Down 1</a></li>
                        <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right" /></a>
                        <ul>
                            <li><a href="#">Deep Drop Down 1</a></li>
                            <li><a href="#">Deep Drop Down 2</a></li>
                            <li><a href="#">Deep Drop Down 3</a></li>
                            <li><a href="#">Deep Drop Down 4</a></li>
                            <li><a href="#">Deep Drop Down 5</a></li>
                        </ul>
                        </li>
                        <li><a href="#">Drop Down 2</a></li>
                        <li><a href="#">Drop Down 3</a></li>
                        <li><a href="#">Drop Down 4</a></li>
                    </ul>
                    </li>
                </ul>
                <i className="bi bi-list mobile-nav-toggle" />
            </nav>{/* .navbar */}

            </>
        )
    }
}
