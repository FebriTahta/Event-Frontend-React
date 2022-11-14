import React, { Component } from "react";
import { useEffect, useState } from "react";
import Header from '../common/Header';
import Footer from '../common/Footer';
import { useParams } from "react-router-dom";

// class DetailE extends Component {
function DaftarB() {

    // render() {
    return (
        <div>
            <Header />


            <div className="page-header-section post-title style-1" style={{ marginBottom: "0", paddingBottom:0 }}>
                <div className="overlay" style={{ backgroundColor: "white"}}>
                    <div className="page-header-content">
                        <div className="container container-1310">
                            <div className="page-header-content-inner">
                                <div className="page-title" id="hero-heading-blog" style={{ marginTop:"30px"}}>
                                    <span className="title-text" id="text-heading-blog-cover"><span style={{ fontSize: "70px" }} id="text-heading-blog">Blog Info Lomba Official</span></span>
                                </div>
                                <p className="title-text" style={{fontSize:"20px", marginTop:"20px"}} id="text-heading-blog2">Daftar Blog / Artikel</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="blog-section bg-ash padding-tb" style={{ backgroundColor: 'white', marginTop: 0, paddingTop:0, }}>
                <div className="container container-1310" style={{paddingTop:0, marginTop:0}}>
                    <div className="row">
                        <div className="col-lg-8 col-sm-12 sticky-widget">
                            <div className="post-item-wrapper">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="post-item" style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}>
                                            <div className="post-thumb-1">
                                                <a href="blog-single.html"><img src="assets/images/blog/01.jpg" alt="blog" /></a>
                                            </div>
                                            <div className="post-content">
                                                <a href="#" className="cata-icon">
                                                    <i className="fas fa-image" />
                                                </a>
                                                <ul className="post-catagory">
                                                    <li><a href="#">Meetup,</a></li>
                                                    <li><a href="#">News</a></li>
                                                </ul>
                                                <a href="blog-single.html">
                                                    <h5>Negotiate Prospect Action Item The Manufacture.</h5>
                                                </a>
                                                <div className="meta-post">
                                                    <span className="by">Posted By <a className="name" href="#">Rajib Raj</a> at <a className="date" href="#">March 4, 2020</a></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="post-item" style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
                                            <div className="post-thumb-1">
                                                <a href="blog-single.html"><img src="assets/images/blog/01.jpg" alt="blog" /></a>
                                            </div>
                                            <div className="post-content">
                                                <a href="#" className="cata-icon">
                                                    <i className="fas fa-image" />
                                                </a>
                                                <ul className="post-catagory">
                                                    <li><a href="#">Meetup,</a></li>
                                                    <li><a href="#">News</a></li>
                                                </ul>
                                                <a href="blog-single.html">
                                                    <h5>Negotiate Prospect Action Item The Manufacture.</h5>
                                                </a>
                                                <div className="meta-post">
                                                    <span className="by">Posted By <a className="name" href="#">Rajib Raj</a> at <a className="date" href="#">March 4, 2020</a></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="post-item" style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}>
                                            <div className="post-thumb-1">
                                                <a href="blog-single.html"><img src="assets/images/blog/03.jpg" alt="blog" /></a>
                                            </div>
                                            <div className="post-content">
                                                <a href="#" className="cata-icon">
                                                    <i className="fas fa-image" />
                                                </a>
                                                <ul className="post-catagory">
                                                    <li><a href="#">Meetup,</a></li>
                                                    <li><a href="#">News</a></li>
                                                </ul>
                                                <a href="blog-single.html">
                                                    <h5>Negotiate Prospect Action Item The Manufacture.</h5>
                                                </a>
                                                <div className="meta-post">
                                                    <span className="by">Posted By <a className="name" href="#">Rajib Raj</a> at <a className="date" href="#">March 4, 2020</a></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-md-6">
                                        <div className="post-item" style={{ boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px' }}>
                                            <div className="post-thumb-1">
                                                <a href="#"><img src="assets/images/blog/04.jpg" alt="blog" /></a>
                                            </div>
                                            <div className="post-content">
                                                <a href="#" className="cata-icon">
                                                    <i className="fas fa-image" />
                                                </a>
                                                <ul className="post-catagory">
                                                    <li><a href="#">Meetup,</a></li>
                                                    <li><a href="#">News</a></li>
                                                </ul>
                                                <a href="#">
                                                    <h5>Negotiate Prospect Action Item The Manufacture.</h5>
                                                </a>
                                                <div className="meta-post">
                                                    <span className="by">Posted By <a className="name" href="#">Rajib Raj</a> at <a className="date" href="#">March 4, 2020</a></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="post-item" style={{ boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px' }}>
                                            <div className="post-thumb-1" >
                                                <a href="#"><img src="assets/images/blog/05.jpg" alt="blog" /></a>
                                            </div>
                                            <div className="post-content">
                                                <a href="#" className="cata-icon">
                                                    <i className="fas fa-image" />
                                                </a>
                                                <ul className="post-catagory">
                                                    <li><a href="#">Meetup,</a></li>
                                                    <li><a href="#">News</a></li>
                                                </ul>
                                                <a href="blog-single.html">
                                                    <h5>Negotiate Prospect Action Item The Manufacture.</h5>
                                                </a>
                                                <div className="meta-post">
                                                    <span className="by">Posted By <a className="name" href="#">Rajib Raj</a> at <a className="date" href="#">March 4, 2020</a></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="post-item" style={{ boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px' }}>
                                            <div className="post-thumb-1">
                                                <a href="blog-single.html"><img src="assets/images/blog/06.jpg" alt="blog" /></a>
                                            </div>
                                            <div className="post-content">
                                                <a href="#" className="cata-icon">
                                                    <i className="fas fa-image" />
                                                </a>
                                                <ul className="post-catagory">
                                                    <li><a href="#">Meetup,</a></li>
                                                    <li><a href="#">News</a></li>
                                                </ul>
                                                <a href="blog-single.html">
                                                    <h5>Negotiate Prospect Action Item The Manufacture.</h5>
                                                </a>
                                                <div className="meta-post">
                                                    <span className="by">Posted By <a className="name" href="#">Rajib Raj</a> at <a className="date" href="#">March 4, 2020</a></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pagination-area d-flex flex-wrap justify-content-center">
                                    <ul className="pagination d-flex flex-wrap m-0">
                                        <li className="prev"><a href="#"><span>« previous</span></a></li>
                                        <li><a href="#">1</a></li>
                                        <li><a href="#" className="active d-none d-md-block">2</a></li>
                                        <li><a href="#" className="d-none d-md-block">3</a></li>
                                        <li className="dot">....</li>
                                        <li><a href="#" className="d-none d-md-block">4</a></li>
                                        <li className="next"><a href="#"><span>next »</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 clo-sm-12">
                            <div className="get-sidebar">
                                <div className="sidebar-item no-gutters justify-content-center">
                                    <div className="sidebar-header" style={{ marginBottom: 0, paddingBottom: 0 }}>
                                        <h6>Cari Informasi</h6>
                                    </div>
                                    <div className="sidebar-inner" style={{ marginTop: 0, paddingTop: 0, marginBottom: 0, paddingBottom: 0 }}>
                                        <div className="sidebar-wrapper">
                                            <form>
                                                <input type="text" className="form-control" style={{ backgroundColor: 'rgb(228, 228, 228)', borderRadius: '20px' }} placeholder=" Search . . ." />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="sidebar-item  sidebar-media no-gutters">
                                    <div className="sidebar-inner" style={{ marginTop: 0, paddingTop: 0, marginBottom: 0, paddingBottom: 0 }}>
                                        <div className="sidebar-wrapper">
                                            <div className="sidebar-header">
                                                <h5>Bergabung Bersama Kami</h5>
                                                <p>Connect with Our Social Newtorks</p>
                                            </div>
                                            <div className="sidebar-wrapper">
                                                <div className="sidebar-social-media">
                                                    <div className="social-item">
                                                        <a href="#" className="icon facebook"><i className="fab fa-facebook-f" /></a>
                                                        <a href="#" className="icon-title">facebook</a>
                                                    </div>
                                                    <div className="social-item">
                                                        <a href="#" className="icon tumblr" style={{ backgroundColor: 'green' }}><i className="fab fa-whatsapp" /></a>
                                                        <a href="#" className="icon-title">whasapp</a>
                                                    </div>
                                                    <div className="social-item">
                                                        <a href="#" className="icon instagram"><i className="fab fa-instagram" /></a>
                                                        <a href="#" className="icon-title">instagram</a>
                                                    </div>
                                                    <div className="social-item">
                                                        <a href="#" className="icon twitter"><i className="fab fa-twitter" /></a>
                                                        <a href="#" className="icon-title">twitter</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sidebar-item  sidebar-comments no-gutters">
                                    <div className="sidebar-inner mb-0" style={{ marginBottom: 0, paddingBottom: 0 }}>
                                        <div className="sidebar-wrapper">
                                            <div className="sidebar-header">
                                                <h5>Artikel Populer</h5>
                                            </div>
                                            <div className="sidebar-wrapper">
                                                <div className="sidebar-comments-list">
                                                    <div className="comment-list d-flex">
                                                        <div className="cm-icon">
                                                            <img src="assets/images/blog/06.jpg" style={{ maxHeight: '100px', marginTop: '10px' }} alt="blog" />
                                                        </div>
                                                        <div className="cm-text">
                                                            <p>Chaomika Lido <span>on</span></p>
                                                            <span>Negotiate Prospect Action Item Rather Than The Manufacture</span>
                                                        </div>
                                                    </div>
                                                    <div className="comment-list d-flex">
                                                        <div className="cm-icon">
                                                            <img src="assets/images/blog/06.jpg" style={{ maxHeight: '100px', marginTop: '10px' }} alt="blog" />
                                                        </div>
                                                        <div className="cm-text">
                                                            <p>Chaomika Lido <span>on</span></p>
                                                            <span>Negotiate Prospect Action Item Rather Than The Manufacture</span>
                                                        </div>
                                                    </div>
                                                    <div className="comment-list d-flex">
                                                        <div className="cm-icon">
                                                            <img src="assets/images/blog/06.jpg" style={{ maxHeight: '100px', marginTop: '10px' }} alt="blog" />
                                                        </div>
                                                        <div className="cm-text">
                                                            <p>Chaomika Lido <span>on</span></p>
                                                            <span>Negotiate Prospect Action Item Rather Than The Manufacture</span>
                                                        </div>
                                                    </div>
                                                    <div className="comment-list d-flex">
                                                        <div className="cm-icon">
                                                            <img src="assets/images/blog/06.jpg" style={{ maxHeight: '100px', marginTop: '10px' }} alt="blog" />
                                                        </div>
                                                        <div className="cm-text">
                                                            <p>Chaomika Lido <span>on</span></p>
                                                            <span>Negotiate Prospect Action Item Rather Than The Manufacture</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sidebar-item">
                                    <div className="sidebar-inner" style={{ marginBottom: 0, paddingBottom: 0 }}>
                                        <div className="sidebar-header">
                                            <h5>Kategori Artikel</h5>
                                        </div>
                                        <div className="sidebar-wrapper">
                                            <ul className="post-catagori">
                                                <li><a href="#">Meetup</a><span>(12)</span></li>
                                                <li><a href="#">Conference</a><span>(6)</span></li>
                                                <li><a href="#">Seminar</a><span>(2)</span></li>
                                                <li><a href="#">Workshop</a><span>(18)</span></li>
                                                <li><a href="#">Schedule</a><span>(19)</span></li>
                                                <li><a href="#">Discusion</a><span>(8)</span></li>
                                                <li><a href="#">News</a><span>(3)</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="sidebar-item">
                                    <div className="sidebar-inner">
                                        <a href="#" type="button" style={{ backgroundColor: 'rgb(42, 149, 236)', padding: '20px', borderRadius: '15px', color: 'white' }}>
                                            <div className="row">
                                                <div className="col-md-3"><i className="fab fa-telegram" style={{ fontSize: '70px' }} /></div>
                                                <div className="col-md-9"> Bergabung bersama dengan para Pencari Info Lomba di Channel Telegram Kami</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="sidebar-item  sc-two no-gutters">
                                    <div className="sidebar-inner">
                                        <div className="sidebar-wrapper">
                                            <div className="sidebar-thumb">
                                                <img src="assets/images/sidebar/02.jpg" alt="sidebar" />
                                                <div className="sidebar-content">
                                                    <h5>Sponsor</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
    // }

}

export default DaftarB