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
                    <li><a className="nav-link scrollto" href><NavLink to="/" exact={true}>Trang chủ</NavLink></a></li>
                    <li><a className="nav-link scrollto" href><NavLink to="/danh-sach-phong-ban">Phòng ban</NavLink></a></li>
                    <li><a className="nav-link scrollto" href><NavLink to="/danh-sach-phieu-nhap">Phiếu nhập VPP</NavLink></a></li>
                    <li><a className="nav-link scrollto" href><NavLink to="/danh-sach-phieu-cap">Phiếu cấp VPP</NavLink></a></li>
                    <li><a className="nav-link scrollto" href>Danh sách VPP</a></li>
                </ul>
                <i className="bi bi-list mobile-nav-toggle" />
            </nav>{/* .navbar */}

            </>
        )
    }
}
