import React, { Component } from 'react';
import '../Menu/style.css' ;
import avata1 from '../../assets/images/avata1.png';
import logo from '../../assets/images/logo_full.png';

class TopMenu extends Component {
    render() {
        return (
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center justify-content-between">
                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><a href="" className="logo_full"><img src={logo} alt className="img-fluid" /></a></li>
                            <li><h1 className="title">QUẢN LÝ VPP TRONG CÔNG TY</h1></li>
                            <li><a className="nav-link scrollto" ></a></li>
                            <li><a className="nav-link scrollto" ></a></li>
                            <li><a className="nav-link scrollto" ></a></li>
                            <li><a className="nav-link scrollto" ></a></li>
                            <li><a className="nav-link scrollto" ></a></li>
                            <li><a className="nav-link scrollto" ></a></li>
                            <li>
                                <a className="nav-link scrollto" >
                                </a>
                                <div className="wrap tabne">
                                    <div className="search">
                                        <input type="text" className="searchTerm textsearch" placeholder="What are you looking for?" />
                                        <button type="submit" className="searchButton">
                                            <i className="fa fa-search" />
                                        </button>
                                    </div>
                                </div>
                            </li>
                            
                            <li><a className="nav-link scrollto" ></a></li>
                            <li><a className="nav-link scrollto" ></a></li>
                            <li><a className="nav-link scrollto" ></a></li>
                            <li><a className="nav-link scrollto textsearch" >Việt Nam</a></li>
                            <li><a><i class="fa fa-bell"></i></a></li>
                            <li><a className="nav-link scrollto"><i class="fas fa-chart-pie"></i></a></li>
                            <li><a className="name">Uncle Duongg</a></li>
                            <li><a className="nav-link scrollto" ></a></li>
                            <li><a href="" className="logo"><img src={avata1} alt className="img-fluid" /></a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            
        );
    }
}

export default TopMenu;