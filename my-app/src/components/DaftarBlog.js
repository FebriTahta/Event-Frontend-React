import React, { Component } from "react";
import { useEffect, useState } from "react";
import Header from '../common/Header';
import Footer from '../common/Footer';
import Skeleton from './Skeleton';
import BlogP from "./BlogPagination";
import { useNavigate } from "react-router-dom";
import '../daftarblog.css';


function DaftarB() {

    const ApiBlog = "https://event.coffinashop.com/api/daftar-blog?page=1";
    const PopularBlog = "https://event.coffinashop.com/api/popular-blog";
    const [isLoading, setIsLoading] = useState(true);
    const [blogs, setBlogs] = useState([]);
    const [pops, setPopular] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        daftarBlogs();
        daftarPopulerBlog();
    }, []);

    const daftarBlogs = async () => {
        setIsLoading(true);
        try {
            const data = await fetch(ApiBlog);
            const response = await data.json();
            setBlogs(response.data);

        } catch (err) { }
        setIsLoading(false);
    }

    const daftarPopulerBlog = async () => {
        const data = await fetch(PopularBlog);
        const response = await data.json();
        setPopular(response.data);
    }

    const handleGoToDetailNews = (slug) => {
        console.log(slug);
        navigate(`/blog/${slug}`);
    }

    const fetchPages = async (currnetPage) => {
        const response = await fetch(`https://event.coffinashop.com/api/daftar-blog?page=${currnetPage}`);
        const data = await response.json();
        return data;
    }

    const onPageChange = (changepage) => {
        console.log(changepage);
       
    }

    const noBlog = () => {
        return (
            <div>
                <h5>Belum Ada Blog / Tulisan</h5>
            </div>
        )
    }

    const paginate = () => {
        let row = [];
        for (let index = 1; index <= blogs.last_page; index++) {
            
            row.push(index)
        }
        console.log(row);
        return row;
    }

    return (
        <div>
            <Header />

            <div className="page-header-section post-title style-1" style={{ marginBottom: "0", paddingBottom: 0 }}>
                <div className="overlay" style={{ backgroundColor: "white" }}>
                    <div className="page-header-content">
                        <div className="container container-1310">
                            <div className="page-header-content-inner">
                                <div className="page-title" id="hero-heading-blog" style={{ marginTop: "30px" }}>
                                    <span className="title-text" id="text-heading-blog-cover"><span style={{ fontSize: "70px" }} id="text-heading-blog">Blog Info Lomba Official</span></span>
                                </div>
                                <p className="title-text" style={{ fontSize: "20px", marginTop: "20px" }} id="text-heading-blog2">Daftar Blog / Artikel</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="blog-section bg-ash padding-tb" style={{ backgroundColor: 'white', marginTop: 0, paddingTop: 0, }}>
                <div className="container container-1310" style={{ paddingTop: 0, marginTop: 0 }}>
                    <div className="row">
                        <div className="col-lg-8 col-sm-12 sticky-widget">
                            <div className="post-item-wrapper">
                                <div className="row">

                                    {isLoading ? (
                                        <Skeleton type="custom" style={{ paddingTop: "100px" }} />
                                    ) : (

                                        blogs.data.map((a, i) => {
                                            if (!a) {
                                                return noBlog();
                                            } else {
                                                if (a.news_title.length < 45) {
                                                    return <div className="col-md-6" key={i} >
                                                        <div className="post-item" style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}>
                                                            <div className="post-thumb-1" >
                                                                <a href="#" onClick={() => handleGoToDetailNews(a.news_slug)}><img src={a.thumbnail} style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }} alt="blog" /></a>
                                                            </div>
                                                            <div className="post-content" >
                                                                <a href="#" onClick={() => handleGoToDetailNews(a.news_slug)} className="cata-icon">
                                                                    <i className="fas fa-image" />
                                                                </a>
                                                                <a href="#" onClick={() => handleGoToDetailNews(a.news_slug)} style={{ marginTop: "15px" }}>
                                                                    <h5>{a.news_title}</h5>
                                                                </a>
                                                                <div className="meta-post" >
                                                                    <span className="by">Posted By <a className="name" href="#">{a.username}</a> at <a className="date" href="#">{a.created_at}</a></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                } else {
                                                    return <div className="col-md-6" key={i} >
                                                        <div className="post-item" style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}>
                                                            <div className="post-thumb-1" >
                                                                <a href="#" onClick={() => handleGoToDetailNews(a.news_slug)}><img src={a.image} style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }} alt="blog" /></a>
                                                            </div>
                                                            <div className="post-content" >
                                                                <a href="#" onClick={() => handleGoToDetailNews(a.news_slug)} className="cata-icon">
                                                                    <i className="fas fa-image" />
                                                                </a>

                                                                <a href="#" onClick={() => handleGoToDetailNews(a.news_slug)} style={{ marginTop: "15px" }}>
                                                                    <h5>{a.news_title.substring(0, 45)}...</h5>
                                                                </a>
                                                                <div className="meta-post" >
                                                                    <span className="by">Posted By <a className="name" href="#">{a.username}</a> at <a className="date" href="#">{a.created_at}</a></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                }
                                            }

                                        })
                                    )}


                                </div>
                                {/* <BlogP data={blogs} /> */}

                                <div className="pagination-area d-flex flex-wrap justify-content-center">
                                    <ul className="pagination d-flex flex-wrap m-0">
                                    <li className="prev"><a href="#"><span>« previous</span></a></li>
                                    
                                    <li><a href="#" className="active d-md-block">1</a></li>
                                    <li><a href="#" className="d-none d-md-block">2</a></li>
                                    <li><a href="#" className="d-none d-md-block">3</a></li>
                                    <li className="dot">....</li>
                                    <li><a href="#" className="d-none d-md-block">4</a></li>
                                        <li className="next"><a href="#" onClick={() => onPageChange(blogs.current_page)}><span>next »</span></a></li>
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
                                                    {
                                                        pops.map((a, i) => {
                                                            return <div key={i} className="comment-list d-flex">
                                                                <div className="cm-icon" style={{ maxHeight: "120px" }}>
                                                                    <img style={{ height: "70px", minWidth: "100px", borderRadius: "5px" }} src={a.thumbnail} alt="blog" />
                                                                </div>
                                                                <div className="cm-text" style={{ lineHeight: "17px" }}>
                                                                    <span style={{ fontSize: "13px" }}>{a.news_title}</span>
                                                                </div>
                                                            </div>
                                                        })
                                                    }
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

}

export default DaftarB