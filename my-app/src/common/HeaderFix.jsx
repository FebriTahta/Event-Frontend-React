import React, { Component } from "react"
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom"
import DetailE from "../components/DetailEvent";
import Home from "../components/Home";
import { NavLink } from "react-router-dom";

class HeaderFix extends Component {

    render() {

        let activeLink = { color: "#fd3d6b" };
        let activeClassName = "#fd3d6b";

        return (
            <BrowserRouter>
                <div>
                    <header id="home">

                        
                        <nav className="navbar navbar-default navbar-sticky bootsnav">

                            <div className="container-full">

                                
                                <div className="attr-nav border-less">
                                    <ul>
                                        <li className="button"><a href="#"><i className="fas fa-heart"></i> Donate</a></li>
                                    </ul>
                                </div>
                                
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                        <i className="fa fa-bars"></i>
                                    </button>
                                    <a className="navbar-brand" href="index.html">
                                        <img src="assets/img/logo-hibiscus.png" className="logo" alt="Logo"/>
                                    </a>
                                </div>
                                
                                <div className="collapse navbar-collapse" id="navbar-menu">
                                    <ul className="nav navbar-nav navbar-center" data-in="fadeInDown" data-out="fadeOutUp">
                                        <li className="dropdown">
                                            <a href="#" className="dropdown-toggle active" data-toggle="dropdown" >Home</a>
                                            <ul className="dropdown-menu">
                                                <li><a href="index.html">Home Version One</a></li>
                                                <li><a href="index-2.html">Home Version Two</a></li>
                                                <li><a href="index-3.html">Home Version Three</a></li>
                                                <li><a href="index-4.html">Home Version Four</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown">
                                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" >Pages</a>
                                            <ul className="dropdown-menu">
                                                <li><a href="about-us.html">About Us</a></li>
                                                <li><a href="volunteer.html">Voluntter</a></li>
                                                <li><a href="our-mission.html">Our Mission</a></li>
                                                <li><a href="contact.html">Contact Us</a></li>
                                                <li><a href="404.html">Error Page</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown">
                                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" >Donations</a>
                                            <ul className="dropdown-menu">
                                                <li><a href="donation-1.html">Donations Version One</a></li>
                                                <li><a href="donation-2.html">Donations Version Two</a></li>
                                                <li><a href="donation-3.html">Donations Version Three</a></li>
                                                <li><a href="donation-single.html">Donations Single</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown">
                                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" >Event</a>
                                            <ul className="dropdown-menu">
                                                <li><a href="event-1.html">Event Version One</a></li>
                                                <li><a href="event-2.html">Event Version Two</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown">
                                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" >Blog</a>
                                            <ul className="dropdown-menu">
                                                <li><a href="blog-standard.html">Blog Standard</a></li>
                                                <li><a href="blog-with-sidebar.html">Blog With Sidebar</a></li>
                                                <li><a href="blog-2-colum.html">Blog Grid Two Colum</a></li>
                                                <li><a href="blog-3-colum.html">Blog Grid Three Colum</a></li>
                                                <li><a href="blog-single.html">Blog Single</a></li>
                                                <li><a href="blog-single-with-sidebar.html">Blog Single With Sidebar</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="contact.html">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </nav>
                        

                    </header>

                    <Routes>
                        <Route path="/" element={<Navigate to="/home" replace />}></Route>
                        <Route path="/home" element={<Home />}></Route>
                        <Route path="/detail-event" element={<DetailE />}></Route>
                    </Routes>

                </div>
            </BrowserRouter>


        )
    }
}

export default HeaderFix