import React, { Component } from 'react';
import '../Menu/style.css' ;
import '../PhieuCap/style.css';
import avata1 from '../../assets/images/avata1.png';
import logo from '../../assets/images/logo_full.png';

class TopMenu extends Component {
    render() {
        return (
            <header id="header" className="grid__full-width">
                <div className="align-items-center justify-content-between">
                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><a className="logo_full align-items-center" href><img src={logo} alt="" className="img-fluid" /></a></li>
                            <li><h1 className="title-right">QUẢN LÝ VPP</h1></li>
                            <li>
                                <a className="nav-link scrollto" href>
                                </a>
                                <div className="wrap title-right-300">
                                    <div className="search">
                                        <button type="submit" className="searchButton">
                                            <i className="fa fa-search" />
                                        </button>
                                        <input type="text" className="searchTerm" placeholder="What are you looking for?" />
                                    </div>
                                </div>
                            </li>
                            <li><a className="nav-link scrollto textsearch" href>Việt Nam</a></li>
                            <li>
                                <i class="header__navbar-icon fa fa-bell"></i>
                                <span className="header__navbar-number-green">4</span>
                            </li>
                            <li>
                                <i class="header__navbar-icon fa fa-adjust"></i>
                                <span className="header__navbar-number-blue">2</span>
                            </li>
                            <li>
                                <a className="name" href>
                                    <ul>
                                        <li className="dropdown name"><a href><span className="name">Uncle Duongg</span></a>
                                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                                                <li className="dropdown-header">
                                                    <h6>Uncle Duongg</h6>
                                                    <span>Web Designer</span>
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li>
                                                    <a className="dropdown-item align-items-center" href>
                                                        <i className="fa fa-user dropdown-item-icon"></i>
                                                        <span>My Profile</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li>
                                                    <a className="dropdown-item d-flex align-items-center" href>
                                                        <i class="fa fa-cog dropdown-item-icon"></i>
                                                        <span>Account Settings</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li>
                                                    <a className="dropdown-item d-flex align-items-center" href>
                                                        <i class="fa fa-question-circle dropdown-item-icon"></i>
                                                        <span>Need Help?</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li>
                                                    <a className="dropdown-item d-flex align-items-center" href>
                                                        <i class="fa fa-sign-out dropdown-item-icon"></i>
                                                        <span>Sign Out</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </a>
                            </li>
                            <li><a href className="logo"><img src={avata1} alt="" className="img-fluid" /></a></li>
                           
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default TopMenu;