import React, { Component } from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../index.css';
import '../skeleton.css';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Skeleton from './Skeleton';

function Home() {

    const [event, setEvent] = useState([]);
    const [news, setNews] = useState([]);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        daftarEvent();
        daftarNews();

    }, []);

    const fetchPages = async (currnetPage) => {
        const response = await fetch(`https://event.coffinashop.com/api/daftar-event-api?page=${currnetPage}`);
        const data = await response.json();
        return data.data;
    }

    const onPageChange = async (changepage) => {
        console.log(changepage);
        const targetEvent = await fetchPages(changepage);

        setEvent(targetEvent);
    }

    const daftarEvent = async () => {
        setIsLoading(true);
        try {
            const data = await fetch("https://event.coffinashop.com/api/daftar-event-api");
            const response = await data.json();
            setEvent(response.data);

        } catch (err) { }
        setIsLoading(false);
    }

    const daftarNews = async () => {
        const data2 = await fetch("https://event.coffinashop.com/api/newest-blog");
        const datas = await data2.json();
        setNews(datas.data);
    }

    const handleGoToDetailNews = (slug) => {
        navigate(`/blog/${slug}`);
    }

    const next = event.next_page_url;
    const prev = event.prev_page_url;
    const last = event.last_page;
    return (
        <div>
            <Header />
            <div className="page-header-section post-title style-1" >
                <div className="overlay" style={{ backgroundColor: "white" }}>
                    <div className="page-header-content">
                        <div className="container container-1310">
                            <div className="page-header-content-inner">
                                <div className="page-title" id="hero-heading-blog" >
                                    <span className="title-text" id="text-heading-blog-cover"><span id="text-heading-blog">Info Lomba Official</span></span>
                                </div>
                                <p className="title-text" id="text-heading-blog2">Cari Lombamu Disini</p>
                            </div>

                            <div className="page-header-content-inner">
                                <div className="card-search">
                                    <input type="text" className="form-control" style={{ backgroundColor: 'rgb(228, 228, 228)', borderRadius: '20px' }} placeholder=" Search . . ." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="blog-section" >
                <div className="container container-1310">
                    <div className="row">
                        <div className="col-lg-12 clo-sm-12 sticky-widget">
                            <div className="post-item-wrapper">
                                <div className="row">

                                    {
                                        isLoading ? (
                                            <Skeleton type="custom" style={{ paddingTop: "100px" }} />
                                        ) : (
                                            event.data.map((item, i) => {

                                                if (item.event_name.length < 20) {
                                                    return <div className="col-md-4 col-sm-6 col-6" key={item.id} style={{ marginBottom: "50px", }}>
                                                        <div className="post-item" >
                                                            <div className="post-thumb" style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px" }}>
                                                                <a href="#"><img style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }} src={item.thumbnail} alt="blog" /></a>
                                                            </div>
                                                            <div className="post-content" style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px", borderEndEndRadius: "10px", borderEndStartRadius: "10px" }}>
                                                                <ul className="post-catagory" style={{ marginBottom: "10px" }}>
                                                                    {item.kategori.map((dataKategori, index) => {
                                                                        return <span className="badge badge-danger d-none" key={index} style={{ marginRight: "5px", padding: "5px" }}>{dataKategori.kategori_name}</span>
                                                                    })}
                                                                </ul>

                                                                <a style={{ marginTop: "10px", padding: "0" }}>
                                                                    <h5 style={{ lineHeight: "22px", fontSize: "18px" }}>
                                                                        {item.event_name} <br /><br />
                                                                    </h5>
                                                                </a>
                                                                <p style={{ fontSize: "13px", lineHeight: "20px" }}><span className="hide">{item.event_source}</span> <br /><span className="hide">Deadline :</span>  {item.event_deadline}</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                } else {
                                                    return <div className="col-md-4 col-sm-6 col-6" key={item.id} style={{ marginBottom: "50px", }}>
                                                        <div className="post-item" >
                                                            <div className="post-thumb" style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px" }}>
                                                                <a href="#"><img style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }} src={item.thumbnail} alt="blog" /></a>
                                                            </div>
                                                            <div className="post-content" style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px", borderEndEndRadius: "10px", borderEndStartRadius: "10px" }}>
                                                                <ul className="post-catagory" style={{ marginBottom: "10px" }}>
                                                                    {item.kategori.map((dataKategori, index) => {
                                                                        return <span className="badge badge-danger" key={index} style={{ marginRight: "5px", padding: "5px" }}>{dataKategori.kategori_name}</span>
                                                                    })}
                                                                </ul>
                                                                <a style={{ marginTop: "10px", padding: "0" }}>
                                                                    <h5 style={{ lineHeight: "22px", fontSize: "18px" }}>
                                                                        {item.event_name.substring(0, 20)}..
                                                                    </h5>
                                                                </a>
                                                                <p style={{ fontSize: "13px", lineHeight: "20px" }}><span className="hide">{item.event_source}</span> <br /><span className="hide">Deadline :</span>  {item.event_deadline}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                }

                                            })
                                        )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {
                        last > 1 ?
                            <div className="pagination-area d-flex bg-ash flex-wrap justify-content-center">
                                <ul className="pagination d-flex flex-wrap m-0">
                                    {prev && <li className="prev"><a href="#" onClick={() => onPageChange(event.current_page - 1)}><span>?? previous</span></a></li>}
                                    {/* <li><a href="#">1</a></li> */}
                                    <li><a href="#" className="active d-none d-md-block">{event.current_page}</a></li>
                                    {/* <li><a href="#" className="d-none d-md-block">3</a></li>
                                    <li className="dot">....</li>
                                    <li><a href="#" className="d-none d-md-block">4</a></li> */}
                                    {next && <li className="next"><a href="#" onClick={() => onPageChange(event.current_page + 1)}><span>next ??</span></a></li>}
                                </ul>
                            </div>
                            : null
                    }

                </div>
            </section>

            <section className="conferench-section" style={{ paddingTop: "0", marginTop: "0" }}>
                <div className="conferench-area" >
                    <div className="container container-1310">
                        <div className="conferench-counter">
                            <div className="conferench-bcr wow fadeInLeft animated" data-wow-duration="1s" data-wow-delay=".1s" style={{ visibility: "visible", animationDuration: "1s", animationDelay: "0.1s" }}>
                                <div className="conferench-counter-a">
                                    <h3>Publikasi Lomba Anda Sekarang</h3>
                                    <p>Dapatkan insight yang tinggi bersama platform terbesar seputar informasi Lomba</p>
                                    <a href="#" className="btn-defult">Upload Lomba</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="ticker  wow fadeInUp animated" data-wow-duration="1s" data-wow-delay=".1s" data-duration="70" data-loop="2" data-effect="linear" style={{ overflow: "hidden", visibility: "visible", animationDuration: "1s", animationDelay: "0.1s" }}>
                    <marquee scrollamount="20" behavior="alternate">Info Lomba Official Info Lomba Official</marquee>
                </div>
            </section>

            <section className="event-venues-about style-1" style={{ marginBottom: "100px" }}>
                <div className="container container-1310">
                    <div className="section-header">
                        <h2>Tips Seputar Jadi Juara</h2>
                    </div>
                    <div className="section-wraper">

                        {
                            news.map((a, i) => {

                                if (a.news_title.length < 30) {
                                    return <div className="event-venue-item" key={i} style={{ marginBottom: "10px" }}>
                                        <div className="event-venue-item-inner" style={{ boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px", borderRadius: "10px" }}>
                                            <div className="row">
                                                <div className="col-md-4 col-4" style={{ marginRight: "0", paddingRight: "0" }}>
                                                    <div className="event-venue-thumb" style={{ borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" }}>
                                                        <a href="#" onClick={() => handleGoToDetailNews(a.news_slug)}><img src={a.thumbnail} alt="venue" /></a>
                                                    </div>
                                                </div>
                                                <div className="col-md-8 col-8" style={{ marginLeft: "0", paddingLeft: "10px" }}>
                                                    <div className="event-venue-content" style={{ marginTop: "0", paddingTop: "0" }}>
                                                        <a href="#" onClick={() => handleGoToDetailNews(a.slug)} style={{ padding: "0", margin: "0" }}><h5 className="judul-blog">{a.news_title}</h5></a>
                                                        <span style={{ fontSize: "14px", padding: "0", margin: "0" }}>By {a.username}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                                else {
                                    return <div className="event-venue-item" key={i} style={{ marginBottom: "10px" }}>
                                        <div className="event-venue-item-inner" style={{ boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px", borderRadius: "10px" }}>
                                            <div className="row">
                                                <div className="col-md-4 col-4" style={{ marginRight: "0", paddingRight: "0" }}>
                                                    <div className="event-venue-thumb" style={{ borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" }}>
                                                        <a href="#" onClick={() => handleGoToDetailNews(a.news_slug)}><img src={a.thumbnail} alt="venue" /></a>
                                                    </div>
                                                </div>
                                                <div className="col-md-8 col-8" style={{ marginLeft: "0", paddingLeft: "10px" }}>
                                                    <div className="event-venue-content" style={{ marginTop: "0", paddingTop: "0" }}>
                                                        <a href="#" onClick={() => handleGoToDetailNews(a.news_slug)} style={{ padding: "0", margin: "0" }}><h5 style={{ fontSize: "20px" }} className="judul-blog">{a.news_title.substring(0, 35)}..</h5></a>
                                                        <span style={{ fontSize: "14px", padding: "0", margin: "0" }}>By {a.username}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            })
                        }
                    </div>
                </div>
            </section>


            <div className="sponsor-section style-2 bg-ash">
                <div className="container container-1310">
                    <div className="section-header">
                        <h2>Partner Kami</h2>
                    </div>
                    <div className="section-wrapper">
                        <div className="sponsor-slider wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="sponsor-thumb">
                                        <img src="assets/images/sponsor/4.png" alt="sponsor" />
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="sponsor-thumb">
                                        <img src="assets/images/sponsor/4.png" alt="sponsor" />
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="sponsor-thumb">
                                        <img src="assets/images/sponsor/4.png" alt="sponsor" />
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="sponsor-thumb">
                                        <img src="assets/images/sponsor/4.png" alt="sponsor" />
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="sponsor-thumb">
                                        <img src="assets/images/sponsor/4.png" alt="sponsor" />
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="sponsor-thumb">
                                        <img src="assets/images/sponsor/4.png" alt="sponsor" />
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="sponsor-thumb">
                                        <img src="assets/images/sponsor/4.png" alt="sponsor" />
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="sponsor-thumb">
                                        <img src="assets/images/sponsor/4.png" alt="sponsor" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div >

    )


}



export default Home