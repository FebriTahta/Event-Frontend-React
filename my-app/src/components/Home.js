import React, { Component } from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../common/Header';
import Footer from '../common/Footer';
import axios from 'axios';
// import BlockEvent from '../item/BlockEvent';
// import FilterHomeKategori from '../item/FilterHomeKategori';

// class Home extends Component {
function Home() {

    // const [event, setEvent] = useState([]);
    const [news, setNews] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // daftarEvent();
        daftarNews();
    }, []);

    // const daftarEvent = async () => {
    //     const data = await fetch("http://127.0.0.1:8000/api/daftar-event-api");
    //     const dataEvents = await data.json();
    //     console.log(dataEvents);
    //     setEvent(dataEvents.data);
    // };

    const daftarNews = async () => {
        // return await axios
        //     .get("https://nurulfalah.org/api/list-berita2")
        //     .then((response) => setNews(response.data))
        //     .catch((err) => console.log(err))
        const data2 = await fetch("https://nurulfalah.org/api/list-berita2");
        const datas = await data2.json();

        setNews(datas.data);
        console.log(datas.data);
    }

    const handleGoToDetailNews = (slug) => {
        console.log(slug);
        navigate(`/news/${slug}`);
    }


    return (
        <div>
            <Header />
            <div className="page-header-section post-title style-1" style={{ backgroundImage: "url(bg3.png)", backgroundColor: "white" }} >
                <div className="overlay" >
                    <div className="page-header-content">
                        <div className="container container-1310">
                            <div className="page-header-content-inner" style={{ marginBottom: "20px" }}>
                                <div className="page-title" style={{ marginTop: "80px" }}>
                                    <span className="title-text">Info Lomba <span>Official</span></span>
                                </div>
                                <ol className="breadcrumb">
                                    <li><a href="#">Bersama Kami</a></li>
                                    <li>Platform Terbesar Seputar Informasi Lomba di Seluruh Wilayah Indonesia</li>
                                </ol>
                                <div className="row">
                                    <div className="col-md-4"></div>
                                    <div className="col-md-4">
                                        <div className="page-title" style={{ marginTop: "20px", textAlign: "center" }}>
                                            <span className="title-text">
                                                <form >
                                                    <input className="form-control" name="search" style={{ maxWidth: "400px" }} />
                                                </form>

                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-md-4"></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="blog-section padding-tb" >
                <div className="container container-1310">
                    <div className="row">
                        <div className="col-lg-12 clo-sm-12 sticky-widget">
                            <div className="post-item-wrapper">
                                <div className="row">



                                    {/* {event.map((dataEvents) => {
                                        if (dataEvents.event_name.length < 30) {
                                            return <div className="col-md-4 col-6" key={dataEvents.id} style={{ marginBottom: "50px", }}>
                                                <div className="post-item" >
                                                    <div className="post-thumb" style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px" }}>
                                                        <a href="#"><img src={'http://127.0.0.1:8000/storage/event_image/' + dataEvents.event_image} alt="blog" /></a>
                                                    </div>
                                                    <div className="post-content" style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px", borderEndEndRadius: "10px", borderEndStartRadius: "10px" }}>
                                                        <ul className="post-catagory">
                                                            {dataEvents.kategori.map((dataKategori, index) => {
                                                                return <span className="badge badge-danger" key={index} style={{ marginRight: "5px", padding: "5px" }}>{dataKategori.kategori_name}</span>
                                                            })}
                                                        </ul>
                                                        <a href="#" style={{ marginTop: "10px" }}>
                                                            <h5 style={{ lineHeight: "22px", fontSize: "16px" }}>
                                                                {dataEvents.event_name}
                                                                <br /><br /><br />
                                                            </h5>

                                                        </a>
                                                        <div style={{ fontSize: "12px", margin: "0", padding: "0" }}>
                                                            {dataEvents.event_source} <br /> {dataEvents.event_rank} | {dataEvents.event_deadline}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        } else {
                                            return <div className="col-md-4 col-6" key={dataEvents.id} style={{ marginBottom: "50px", }}>
                                                <div className="post-item" >
                                                    <div className="post-thumb" style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px" }}>
                                                        <a href="#"><img src={'http://127.0.0.1:8000/storage/event_image/' + dataEvents.event_image} alt="blog" /></a>
                                                    </div>
                                                    <div className="post-content" style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px", borderEndEndRadius: "10px", borderEndStartRadius: "10px" }}>
                                                        <ul className="post-catagory">
                                                            {dataEvents.kategori.map((dataKategori, index) => {
                                                                return <span className="badge badge-danger" key={index} style={{ marginRight: "5px", padding: "5px" }}>{dataKategori.kategori_name}</span>
                                                            })}
                                                        </ul>
                                                        <a style={{ marginTop: "10px", padding: "0" }}>
                                                            <h5 style={{ lineHeight: "22px", fontSize: "16px" }}>
                                                                {dataEvents.event_name.substring(0, 60)}..
                                                            </h5>
                                                            <br />
                                                        </a>

                                                        <div style={{ fontSize: "12px", margin: "0", padding: "0" }}>
                                                            {dataEvents.event_source} <br /> {dataEvents.event_rank} | {dataEvents.event_deadline}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        }

                                    })} */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pagination-area d-flex bg-ash flex-wrap justify-content-center">
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
                        <u style={{ float: "right" }}>Baca Tips Lainnya</u >
                        <h2>Tips Seputar Jadi Juara</h2>
                    </div>
                    <div className="section-wraper">

                        {news.map((a, i) => {

                            if (a.judul.length < 30) {
                                return <div className="event-venue-item" key={i} style={{ marginBottom: "10px" }}>
                                    <div className="event-venue-item-inner" style={{ boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px", borderRadius: "10px" }}>
                                        <div className="row">
                                            <div className="col-md-4 col-4" style={{ marginRight: "0", paddingRight: "0" }}>
                                                <div className="event-venue-thumb" style={{ borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" }}>
                                                    <a href="#" onClick={()=>handleGoToDetailNews(a.slug)}><img src="assets/images/venue/03.png" alt="venue" style={{ height: "100%" }} /></a>
                                                </div>
                                            </div>
                                            <div className="col-md-8 col-8" style={{ marginLeft: "0", paddingLeft: "10px" }}>
                                                <div className="event-venue-content" style={{ marginTop: "0", paddingTop: "0" }}>
                                                    <a href="#" onClick={()=>handleGoToDetailNews(a.slug)} style={{ padding: "0", margin: "0" }}><h5 style={{ fontSize: "20px" }}>{a.judul}</h5></a>
                                                    <span style={{ fontSize: "14px", padding: "0", margin: "0" }}>By admin</span>
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
                                                    <a href="#" onClick={()=>handleGoToDetailNews(a.slug)}><img src="assets/images/venue/03.png" alt="venue" style={{ height: "100%" }} /></a>
                                                </div>
                                            </div>
                                            <div className="col-md-8 col-8" style={{ marginLeft: "0", paddingLeft: "10px" }}>
                                                <div className="event-venue-content" style={{ marginTop: "0", paddingTop: "0" }}>
                                                    <a href="#" onClick={()=>handleGoToDetailNews(a.slug)} style={{ padding: "0", margin: "0" }}><h5 style={{ fontSize: "20px" }}>{a.judul.substring(0, 35)}..</h5></a>
                                                    <span style={{ fontSize: "14px", padding: "0", margin: "0" }}>By admin</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }


                        }
                        )}
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