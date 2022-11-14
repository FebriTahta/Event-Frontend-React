import React, { Component } from "react"
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom"
import DetailE from "../components/DetailEvent";
import DetailN from "../components/DetailBlog";
import Home from "../components/Home";
import { NavLink } from "react-router-dom";
import Logo from '../logo1.png';

class Header extends Component {

    render() {

        let activeLink = { color: "#fd3d6b" };
        let activeClassName = "#fd3d6b";

        return (
            // <BrowserRouter>
                <div>

                    <div className="mobile-menu">
                        <nav className="mobile-header primary-menu d-lg-none" style={{ backgroundColor:"white" }}>
                            <div className="header-logo">
                                <a className="logo"><img src={Logo} style={{maxWidth:"200px"}} alt="logo"/></a>
                            </div>
                            <div className="header-bar" id="open-button">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </nav>
                        <div className="menu-wrap">
                            <div className="morph-shape" id="morph-shape" data-morph-open="M-1,0h101c0,0,0-1,0,395c0,404,0,405,0,405H-1V0z">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 800" preserveAspectRatio="none">
                                    <path d="M-1,0h101c0,0-97.833,153.603-97.833,396.167C2.167,627.579,100,800,100,800H-1V0z" />
                                </svg>
                            </div>
                            <nav className="menu">
                                <div className="mobile-menu-area d-lg-none">
                                    <div className="mobile-menu-area-inner" id="scrollbar">
                                        <div className="header-bar m-menu-bar">
                                            <a href="#" className="logo"><img src={Logo} style={{maxWidth:"150px"}} alt="logo"/></a>
                                            <div className="close-button" id="close-button"></div>
                                        </div>
                                        <ul className="m-menu">
                                            <li><a href="#0">Home</a>
                                                <ul className="m-submenu">
                                                    <li><a href="index.html">Home page one</a></li>
                                                    <li><a href="index-2.html">Home page two</a></li>
                                                    <li><a href="index-3.html">Home page three</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="about.html">About</a></li>
                                            <li><a href="speaker-profile.html">Speaker</a></li>
                                            <li><a href="#0">Pages</a>
                                                <ul className="m-submenu">
                                                    <li><a href="contact-page.html">contact us</a></li>
                                                    <li><a href="registation.html">registation</a></li>
                                                    <li><a href="event-sidebar.html">event sidebar</a></li>
                                                    <li><a href="event-single.html">event single</a></li>
                                                    <li><a href="event-timeline.html">Event timeline</a></li>
                                                    <li><a href="masonary.html">Event masonary</a></li>
                                                    <li><a href="404.html">404</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="sponsor-reg.html">Sponsors</a></li>
                                            <li><a href="#0">Venue</a>
                                                <ul className="m-submenu">
                                                    <li><a href="event-venue.html">Event venues</a></li>
                                                    <li><a href="eventvenus-details.html">Event vanus details</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#0">blog</a>
                                                <ul className="m-submenu">
                                                    <li><a href="blog-page.html">Blog Page</a></li>
                                                    <li><a href="blog-single.html">Blog Single Page</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <ul className="social-link-list d-flex flex-wrap">
                                            <li><a href="#" className="facebook"><i className=" fab fa-facebook-f"></i></a></li>
                                            <li><a href="#" className="twitter-sm"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#" className="linkedin"><i className="fab fa-linkedin-in"></i></a></li>
                                            <li><a href="#" className="google"><i className="fab fa-google-plus-g"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
               
                    <div className="header-section style-3 d-none d-lg-block">
                        <div className="header-bottom">
                            <nav className="primary-menu">
                                <div className="container container-1310">
                                    <div className="menu-area">
                                        <div className="row no-gutters justify-content-between align-items-center">
                                            <a href="index.html" className="logo">
                                                <img src={Logo} style={{maxWidth:"200px"}} alt="logo"/>
                                                    <img src={Logo} style={{maxWidth:"200px"}} alt="logo"/>
                                                    </a>
                                                    <div className="right d-flex align-items-center">
                                                        <ul className="main-menu d-flex align-items-center">
                                                            <li>
                                                                <NavLink to="/home" style={({ isActive }) => isActive ? activeLink : undefined}>Home</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="/blog" style={({ isActive }) => isActive ? activeLink : undefined}>News & Article</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="/detail-event" style={({ isActive }) => isActive ? activeLink : undefined}>Kerj Sama</NavLink>
                                                            </li>
                                                            <li><a href="speaker-profile.html">Jadi Penulis</a></li>
                                                        </ul>
                                                        <a href="#" className="reg-head d-none d-xl-block">Upload Lomba</a>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                            </nav>
                        </div>
                    </div>

                    {/* <Routes>
                        <Route path="/" element={<Navigate to="/home" replace />}></Route>
                        <Route path="/home" element={<Home />}></Route>
                        <Route path="/detail-event" element={<DetailE />}></Route>
                        <Route path="news/:slug" element={<DetailN />}></Route>
                    </Routes> */}

                </div>
            // </BrowserRouter>


        )
    }
}

export default Header