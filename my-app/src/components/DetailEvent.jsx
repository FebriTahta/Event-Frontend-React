import React, { Component } from "react";
import { useEffect, useState } from "react";

// class DetailE extends Component {
function DetailE({ dataEvent }) {

    useEffect(() => {
        console.log(dataEvent);
    }, []);

    // render() {
        return (
            <div>
                <section className="judul" style={{ margin: "auto", paddingTop: "5%", paddingBottom: "2%", paddingRight: "20%", paddingLeft: "20%", textAlign: "center" }}>
                    <h1 style={{ fontSize: "40px" ,lineHeight:"45px" }}>Nama lomba </h1>
                    <h6 style={{ fontWeight:"100", color:"grey" }}>( SMP Negri 4 Surabaya )</h6>
                </section>

                <section className="blog-section bg-ash padding-tb" style={{ backgroundColor: "white", paddingTop: "0px", paddingRight: "0px" }}>
                    <div className="container container-1310">
                        <div className="main-blog row">
                            <div className="col-lg-8 clo-sm-12">
                                <div className="post-item-wrapper">
                                    <div className="post-item">
                                        <div className="post-content-header entry-header" style={{ padding: "0px", marginBottom: "20px" }}>
                                            <ul className="post-catagory">
                                                <li><a href="#" style={{ fontSize:"20px" }}>KATEGORI</a></li>
                                                <li className="date">
                                                    <a href="#" className="badge badge-danger" style={{ padding: "8px", color: "white", marginRight: "10px" }}> Esai </a>
                                                    <a href="#" className="badge badge-danger" style={{ padding: "8px", color: "white" }}> Posster </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="post-thumb" style={{ marginBottom: "20px" }}>
                                            <a href="event1.jpg" data-rel="lightcase"><img src="event2.jpg" alt="blog-single" /></a>
                                        </div>
                                        <div className="post-content entry-content" style={{ padding: "0px" }}>
                                            <div className="post-content-inner bg-ash" style={{ padding: "4%", borderRadius: "15px" }}>
                                                <p>Whereas media application. Distinctive parall functionalize mindshare rather than bricks-and-clicks schema. Dramatic reconceptualsynergistic channel whereas tactic communi repurpose granular quality. Competent syndicate vertical infomediaries with inexpensive methodologies.</p>
                                                <p>Compell utilize integrated infomediary without ethic content. Convenient negotiate sustain innovation vis a vis economically sound paradigms. Dynamically provide access to error-free ROI with resource maximize leadership skill. Seamless more maintanable experience before front-end core competen. Uniquely network intuitive methods of empowerment after resource maximizing.</p>
                                                <blockquote>Globally cultivate corporate information through open-source technologies. Synergistically create tactical mindshare whereas process-centric catalysts for change. Holisticly innovate real-time relationships front-end.<cite>- Marko Biana</cite></blockquote>
                                                <p>Provide access to error with resource maximize leadership skill. Seamless more maintanable experience before front-end core competencies. Uniquely network intuitive methods of empowerment after resource maximizing.</p>
                                                <p>Whereas media application. Distinctive parall functionalize mindshare rather than bricks-and-clicks schema. Dramatical reconceptualize synergistic channel whereas community repurpose granular quality. Competent syndicate vertical infomediaries with inexpensive methodologies.</p>
                                                <p>Compell utilize integrated infomediary without ethic content. Convenient negotiate sustain innovation vis a vis economically sound paradigms. Dynamically provide access to error-free ROI with resource maximize leadership skill. Seamless more maintanable experience before front-end competencies. Unique network intuitive methods of empowerment after resource maximizing.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 clo-sm-12 sticky-widget" style={{ paddingLeft: "0px" }}>
                                <div className="get-sidebar">
                                    <div className="sidebar-item no-gutters justify-content-center">
                                        <div className="sidebar-inner">
                                            <div className="sidebar-wrapper" style={{ marginTop: "10px", marginBottom: "20px" }}>
                                                <div className="form-group">
                                                    <span>Penyelenggara</span>
                                                    <p style={{ lineHeight: "20px", fontWeight: "bold" }}>HMP Ilmu Komunikasi UIN Sunan Ampel Surabaya</p>
                                                </div>
                                                <div className="form-group">
                                                    <span>Tingkat</span>
                                                    <p style={{ lineHeight: "20px", fontWeight: "bold" }}>Nasional</p>
                                                </div>
                                                <div className="form-group">
                                                    <span>Pendaftaran Terakhir</span>
                                                    <p style={{ lineHeight: "20px", fontWeight: "bold" }}>20 Agustus 2022</p>
                                                </div>
                                                <div className="form-group">
                                                    <span>Tempat</span>
                                                    <p style={{ lineHeight: "20px", fontWeight: "bold" }}>UIN Sunan Ampel Surabaya</p>
                                                </div>
                                                <div className="form-group">
                                                    <span>Fasilitas</span>
                                                    <p style={{ lineHeight: "20px", fontWeight: "bold" }}>Sertifikat Untuk Semua</p>
                                                </div>
                                            </div>
                                            <a href="#" className="btn-defult" id="uploadBtn" style={{ width: "100%", textAlign: "center" }}>Daftar Disini</a>
                                        </div>
                                    </div>

                                    <div className="sidebar-item sidebar-media no-gutters" style={{ marginTop:"-50px" }}>
                                        <div className="sidebar-inner"  style={{margin:0 }}>
                                            <div className="sidebar-wrapper" style={{ padding:0,margin:0 }}>
                                                <div className="sidebar-header">
                                                    <h5>Connect with Us</h5>
                                                    <p>Bagikan Informasi Lomba Ini</p>
                                                </div>
                                                <div className="sidebar-wrapper" style={{ paddingTop: "0px", marginTop: "0px" }}>
                                                    <div className="sidebar-social-media">
                                                        <div className="social-item">
                                                            <a href="#" className="icon facebook"><i className="fab fa-facebook-f"></i></a>
                                                            <a href="#" className="icon-title">facebook</a>
                                                        </div>
                                                        <div className="social-item">
                                                            <a href="#" className="icon twitter"><i className="fab fa-twitter"></i></a>
                                                            <a href="#" className="icon-title">twitter</a>
                                                        </div>
                                                        <div className="social-item">
                                                            <a href="#" className="icon behance" style={{ backgroundColor: "green" }}><i className="fab fa-whatsapp"></i></a>
                                                            <a href="#" className="icon-title">behance</a>
                                                        </div>
                                                        <div className="social-item">
                                                            <a href="#" className="icon instagram"><i className="fab fa-instagram"></i></a>
                                                            <a href="#" className="icon-title">instagram</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="sidebar-item sidebar-comments no-gutters" style={{ marginTop:"-30px" }}>
                                        <div className="sidebar-inner mb-0" style={{ paddingTop: "0px", marginTop: "0px" }}>
                                            <div className="sidebar-wrapper">
                                                <div className="sidebar-wrapper">
                                                    <div className="sidebar-comments-list">
                                                        <div className="sidebar-header">
                                                            <h5>Info Lomba Lainnya</h5>
                                                        </div>
                                                        <div className="comment-list d-flex">
                                                            <div className="cm-icon">
                                                                <img src="event1.jpg" style={{ maxWidth: "75px", maxHeight: "80px" }} />
                                                            </div>
                                                            <div className="cm-text" style={{ padding: "0" }}>
                                                                <p style={{ lineHeight: "20px", fontSize: "15px", minHeight: "50px" }}>Sukses buat pentas seni sekolah ? simak 7 tips berikut</p>
                                                                <span style={{ fontSize: "12px" }}><i className="fa fa-user"></i> Admin</span>
                                                            </div>
                                                        </div>
                                                        <div className="comment-list d-flex">
                                                            <div className="cm-icon">
                                                                <img src="event2.jpg" style={{ maxWidth: "75px", maxHeight: "80px" }} />
                                                            </div>
                                                            <div className="cm-text" style={{ padding: "0" }}>
                                                                <p style={{ lineHeight: "20px", fontSize: "15px", minHeight: "50px" }}>Sukses buat pentas seni sekolah ? simak 7 tips berikut</p>
                                                                <span style={{ fontSize: "12px" }}><i className="fa fa-user"></i> Admin</span>
                                                            </div>
                                                        </div>
                                                        <div className="comment-list d-flex">
                                                            <div className="cm-icon">
                                                                <img src="event3.jpg" style={{ maxWidth: "75px", maxHeight: "80px" }} />
                                                            </div>
                                                            <div className="cm-text" style={{ padding: "0" }}>
                                                                <p style={{ lineHeight: "20px", fontSize: "15px", minHeight: "50px" }}>Sukses buat pentas seni sekolah ? simak 7 tips berikut</p>
                                                                <span style={{ fontSize: "12px" }}><i className="fa fa-user"></i> Admin</span>
                                                            </div>
                                                        </div>
                                                        <div className="comment-list d-flex">
                                                            <div className="cm-icon">
                                                                <img src="event2.jpg" style={{ maxWidth: "75px", maxHeight: "80px" }} />
                                                            </div>
                                                            <div className="cm-text" style={{ padding: "0" }}>
                                                                <p style={{ lineHeight: "20px", fontSize: "15px", minHeight: "50px" }}>Sukses buat pentas seni sekolah ? simak 7 tips berikut</p>
                                                                <span style={{ fontSize: "12px" }}><i className="fa fa-user"></i> Admin</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="sidebar-item sidebar-comments no-gutters" style={{ marginTop:"-30px" }}>
                                        <div className="sidebar-inner mb-0" style={{ paddingTop: "0px", marginTop: "0px" }}>
                                            <div className="sidebar-wrapper">
                                                <div className="sidebar-wrapper">
                                                    <div className="sidebar-comments-list"  style={{ backgroundColor:"#5DA7DB", borderRadius:"15px", padding:"3%" }}>
                                                        <div className="comment-list d-flex">
                                                            <div className="cm-icon">
                                                                <i className="fab fa-telegram" style={{ color:"white", fontSize:"50px" }}></i>
                                                            </div>
                                                            <div className="cm-text" style={{ padding: "0" }}>
                                                                <p style={{ lineHeight: "20px", fontSize: "15px", color:"white" }}>Ayo Bergabung dengan Para Pencari Info Lomba di Channel Telegram kammi!</p>
                                                            </div>
                                                        </div>
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
            </div>
        )
    // }

}

export default DetailE