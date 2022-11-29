import React, { Component } from "react";
import Skeleton from './Skeleton';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../common/Header';
import Footer from '../common/Footer';
import '../index.css';
import '../skeleton.css';
import { useParams } from "react-router-dom";

// class DetailE extends Component {
function DetailB() {

    const [news, setNews] = useState([]);
    const [blog, setBlog] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const { slug } = useParams();

    useEffect(() => {
        fetch(`https://event.coffinashop.com/api/blog/${slug}`)
            .then((response) => response.json())
            .then((data) => {
                setBlog(data.data);
            })
            .catch((err) => console.log(err));
        console.log(blog);
        daftarNews();
    }, [slug]);

    const daftarNews = async () => {
        setIsLoading(true);
        try {
        const data2 = await fetch("https://nurulfalah.org/api/list-berita2");
        const datas = await data2.json();
        setNews(datas.data);
        } catch (err) {}
        setIsLoading(false);
    }

    const handleGoToDetailNews = (slug) => {
        console.log(slug);
        navigate(`/news/${slug}`);
    }


    // render() {
    return (
        <div>
            <Header />
            
            <div className="page-header-section post-title style-1"
                style={{ backgroundImage: "url(assets/images/pageheader/pageheader.png)" }}
            >
                <div className="overlay" style={{ backgroundColor: "white" }}>
                    <div className="page-header-content">
                        <div className="container container-1310">
                            <div className="page-header-content-inner">
                                <div className="page-title" style={{ paddingLeft: "15%", paddingRight: "15%", marginTop: "150px" }}>
                                    <span className="title-text" style={{ color: "#333333", fontSize:"40px", lineHeight:"50px" }}>{blog.news_title}</span>
                                </div>
                                <ol className="breadcrumb">
                                    <li className="active" style={{ color: "grey", fontSize: "20px" }}>Oleh {blog.username}</li>
                                </ol>
                                <a href="#" type="button" style={{
                                    backgroundColor: 'rgb(42, 149, 236)', padding: '7px', borderRadius: '50px', color: 'white', maxWidth: "680px"
                                    , lineHeight: "30px", marginTop: "20px"
                                }}>
                                    <div className="row">
                                        <div className="col-md-3 col-3"><i className="fab fa-telegram" style={{ fontSize: '70px' }} /></div>
                                        <div className="col-md-9 col-9" style={{ fontSize: '25px', textAlign: "left" }}> Bergabung bersama dengan para Pencari Info Lomba di Channel Telegram Kami</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="blog-section bg-ash padding-tb" style={{ backgroundColor: "white", paddingTop: "0px", paddingRight: "0px" }}>
                <div className="container container-1310">
                    <div className="main-blog row">
                        <div className="col-lg-12 clo-sm-12">
                            <div className="post-item-wrapper">
                                <div className="post-item" style={{ paddingLeft: "10%", paddingRight: "10%" }}>
                                    <img src={blog.image} style={{ width: "100%", marginBottom: "50px", marginTop: "50px" }} alt="blog-single" />
                                    <div className="post-content entry-content" style={{ padding: "0px" }}>
                                        <div className="post-content-inner">
                                            <p>Whereas media application. Distinctive parall functionalize mindshare rather than bricks-and-clicks schema. Dramatic reconceptualsynergistic channel whereas tactic communi repurpose granular quality. Competent syndicate vertical infomediaries with inexpensive methodologies.</p>
                                            <p>Compell utilize integrated infomediary without ethic content. Convenient negotiate sustain innovation vis a vis economically sound paradigms. Dynamically provide access to error-free ROI with resource maximize leadership skill. Seamless more maintanable experience before front-end core competen. Uniquely network intuitive methods of empowerment after resource maximizing.</p>
                                            <blockquote>Globally cultivate corporate information through open-source technologies. Synergistically create tactical mindshare whereas process-centric catalysts for change. Holisticly innovate real-time relationships front-end.<cite>- Marko Biana</cite></blockquote>
                                            <p>Provide access to error with resource maximize leadership skill. Seamless more maintanable experience before front-end core competencies. Uniquely network intuitive methods of empowerment after resource maximizing.</p>
                                            <p>Whereas media application. Distinctive parall functionalize mindshare rather than bricks-and-clicks schema. Dramatical reconceptualize synergistic channel whereas community repurpose granular quality. Competent syndicate vertical infomediaries with inexpensive methodologies.</p>
                                            <p>Compell utilize integrated infomediary without ethic content. Convenient negotiate sustain innovation vis a vis economically sound paradigms. Dynamically provide access to error-free ROI with resource maximize leadership skill. Seamless more maintanable experience before front-end competencies. Unique network intuitive methods of empowerment after resource maximizing.</p>
                                            <div className="tags-section entry-footer justify-content-md-between justify-content-center">
                                                <ul className="tags-part d-flex flex-wrap">
                                                    <li><i className="fa fa-tags"></i></li>
                                                    <li><span>Bagikan tulisan ini : </span> </li>
                                                </ul>
                                                <ul className="social-link-list d-flex flex-wrap">
                                                    <li><a href="#" className="facebook"><i className=" fab fa-facebook-f"></i></a></li>
                                                    <li><a href="#" className="twitter-sm"><i className="fab fa-twitter"></i></a></li>
                                                    <li><a href="#" className="google" style={{ backgroundColor: "green" }}><i className="fab fa-whatsapp"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="event-venues-about style-1" style={{ marginBottom: "100px" }}>
                <div className="container container-1310" style={{ paddingLeft: "7%", paddingRight: "7%" }}>
                    <div className="section-header">
                        <h2>Artikel Terkait</h2>
                    </div>
                    <div className="section-wraper">

                        {isLoading ? (
                            <Skeleton type="custom" />
                        ) : (
                            news.map((a, i) => {

                                if (a.judul.length < 30) {
                                    return <div className="event-venue-item" key={i} style={{ marginBottom: "10px" }}>
                                        <div className="event-venue-item-inner" style={{ boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px", borderRadius: "10px" }}>
                                            <div className="row">
                                                <div className="col-md-4 col-4" style={{ marginRight: "0", paddingRight: "0" }}>
                                                    <div className="event-venue-thumb" style={{ borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" }}>
                                                        <a href="#" onClick={() => handleGoToDetailNews(a.slug)}><img src="assets/images/venue/03.png" alt="venue" style={{ height: "100%" }} /></a>
                                                    </div>
                                                </div>
                                                <div className="col-md-8 col-8" style={{ marginLeft: "0", paddingLeft: "10px" }}>
                                                    <div className="event-venue-content" style={{ marginTop: "0", paddingTop: "0" }}>
                                                        <a href="#" onClick={() => handleGoToDetailNews(a.slug)} style={{ padding: "0", margin: "0" }}><h5 style={{ fontSize: "20px" }} className="judul-blog">{a.judul}</h5></a>
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
                                                        <a href="#" onClick={() => handleGoToDetailNews(a.slug)}><img src="assets/images/venue/03.png" alt="venue" style={{ height: "100%" }} /></a>
                                                    </div>
                                                </div>
                                                <div className="col-md-8 col-8" style={{ marginLeft: "0", paddingLeft: "10px" }}>
                                                    <div className="event-venue-content" style={{ marginTop: "0", paddingTop: "0" }}>
                                                        <a href="#" onClick={() => handleGoToDetailNews(a.slug)} style={{ padding: "0", margin: "0" }}><h5 style={{ fontSize: "20px" }} className="judul-blog">{a.judul.substring(0, 35)}..</h5></a>
                                                        <span style={{ fontSize: "14px", padding: "0", margin: "0" }}>By admin</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            })
                        )}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
    // }

}

export default DetailB