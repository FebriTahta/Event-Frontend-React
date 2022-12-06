import React, { Component } from "react";
import { useEffect, useState } from "react";
import Header from '../common/Header';
import Footer from '../common/Footer';
import Skeleton from './Skeleton';
import { useNavigate } from "react-router-dom";
import '../daftarblog.css';


function DaftarB() {

    const ApiBlog = "https://event.coffinashop.com/api/daftar-blog?page=1";
    const PopularBlog = "https://event.coffinashop.com/api/popular-blog";
    const ApiTagBlog = "https://event.coffinashop.com/api/tag-blog"
    const [isLoading, setIsLoading] = useState(true);
    const [blogs, setBlogs] = useState([]);
    const [tags, setTags] = useState([]);
    const [pops, setPopular] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        daftarBlogs();
        daftarPopulerBlog();
        daftarTagBlog();

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
        navigate(`/blog/${slug}`);
    }

    const handleBlogTag = (tag_slug) => {
        navigate(`/blog-tag/${tag_slug}`);
    }

    const fetchPages = async (currnetPage) => {
        const response = await fetch(`https://event.coffinashop.com/api/daftar-blog?page=${currnetPage}`);
        const data = await response.json();
        return data.data;
    }

    const onPageChange = async (changepage) => {
        const daftarBlogs = await fetchPages(changepage);
        setBlogs(daftarBlogs);
    }

    const fetchSearch = async (resultSearch) => {
        const response = await fetch(`https://event.coffinashop.com/api/search-blog/${resultSearch}`);
        const data = await response.json();
        return data.data;
    }

   
    const onSearch = async (search) => {
        const daftarBlogSearch = await fetchSearch(search);
        setBlogs(daftarBlogSearch);
    }

    const daftarTagBlog = async () => {
        const data = await fetch(ApiTagBlog);
        const response = await data.json();
        setTags(response.data);
    }


    const prev = blogs.prev_page_url;
    const next = blogs.next_page_url;
    const last = blogs.last_page;

    return (
        <div>
            <Header />

            <div className="page-header-section post-title style-1" style={{ marginBottom: "0", paddingBottom: 0 }}>
                <div className="overlay" style={{ backgroundColor: "white" }}>
                    <div className="page-header-content">
                        <div className="container container-1310">
                            <div className="page-header-content-inner">
                                <div className="page-title" id="hero-heading-blog" >
                                    <span className="title-text" id="text-heading-blog-cover"><span id="text-heading-blog">Blog Info Lomba Official</span></span>
                                </div>
                                <p className="title-text" id="text-heading-blog2">Daftar Blog / Artikel</p>
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
                                        blogs ?
                                            blogs.data.map((a, i) => {
                                                if (a.news_title.length < 35) {
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
                                                                    <p style={{ padding:0, margin: 0 }}>Dibaca : {a.news_views}</p>
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
                                                                    <h5>{a.news_title.substring(0, 35)}...</h5>
                                                                </a>
                                                                <div className="meta-post" >
                                                                    <p style={{ padding:0, margin: 0 }}>Dibaca : {a.news_views}</p>
                                                                    <span className="by">Posted By <a className="name" href="#">{a.username}</a> at <a className="date" href="#">{a.created_at}</a></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                }

                                            }
                                            ) : null
                                    )}


                                </div>
                                {/* <BlogP data={blogs} /> */}
                                {
                                    last > 1 ? <div className="pagination-area d-flex flex-wrap justify-content-center">
                                        <ul className="pagination d-flex flex-wrap m-0">
                                            {prev && <li className="prev"><a href="#" onClick={() => onPageChange(blogs.current_page - 1)}><span>« previous</span></a></li>}

                                            <li><a href="#" className="active d-md-block">{blogs.current_page}</a></li>
                                            {/* <li><a href="#" className="d-none d-md-block">2</a></li>
                                   <li><a href="#" className="d-none d-md-block">3</a></li>
                                   <li className="dot">....</li>
                                   <li><a href="#" className="d-none d-md-block">4</a></li> */}
                                            <li><a href="#" className="d-none d-md-block">{blogs.label}</a></li>
                                            {next && <li className="next"><a href="#" onClick={() => onPageChange(blogs.current_page + 1)}><span>next »</span></a></li>}

                                        </ul>
                                    </div> : null
                                }


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
                                            <input type="text" onChange={(e) => onSearch(e.target.value)}
                                                className="form-control" style={{ backgroundColor: 'rgb(228, 228, 228)', borderRadius: '20px' }} placeholder=" Search . . ." />
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
                                                                    <a href="#" onClick={() => handleGoToDetailNews(a.news_slug)}>
                                                                        <img style={{ height: "70px", maxWidth: "100px", borderRadius: "5px" }} src={a.thumbnail} alt="blog" />
                                                                    </a>
                                                                </div>
                                                                <div className="cm-text" style={{ lineHeight: "17px" }}>
                                                                    <a href="#" onClick={() => handleGoToDetailNews(a.news_slug)}>
                                                                        <span style={{ fontSize: "13px" }}>{a.news_title}</span>
                                                                    </a>
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
                                                {
                                                    tags.map((item, index) => {
                                                        return <li key={index}><a href="#" onClick={() => handleBlogTag(item.tag_slug)}
                                                        >{item.tag_name}</a><span>({item.total})</span></li>
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="sidebar-item">
                                    <div className="sidebar-inner">
                                        <a href="#" type="button" style={{ backgroundColor: 'rgb(42, 149, 236)', padding: '20px', borderRadius: '15px', color: 'white' }}>
                                            <div className="row">
                                                <div className="col-md-4 col-4"><i className="fab fa-telegram" style={{ fontSize: '70px' }} /></div>
                                                <div className="col-md-8 col-8"><span className="text-telegram">Bergabung bersama dengan para Pencari Info Lomba di Channel Telegram Kami</span></div>
                                            </div>
                                        </a>
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