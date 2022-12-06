import React, { Component } from "react";
import Skeleton from './Skeleton';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../common/Header';
import Footer from '../common/Footer';
import '../detailBlog.css';
import '../skeleton.css';
import { useParams } from "react-router-dom";

// class DetailE extends Component {
function DetailB() {

    const PopularBlog = "https://event.coffinashop.com/api/popular-blog";
    const [simi, setSimilar] = useState([]);
    const [blog, setBlog] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const { slug } = useParams();

    useEffect(() => {
        thisBlog(slug);
    }, [slug]);

    const thisBlog = async (slug) => {
        const data = await fetch(`https://event.coffinashop.com/api/blog/${slug}`);
        const response = await data.json();
        setBlog(response.data);
        daftarSimilarBlog(response.data.tag_id, response.data.id);
    }

    const daftarSimilarBlog = async (tag_id, $id) => {
        setIsLoading(true);
        try {
            const response = await fetch(`https://event.coffinashop.com/api/similar-blog/${tag_id}/${$id}`);
            const data = await response.json();
            setSimilar(data.data);
        } catch (error) { }
        setIsLoading(false);
    }

    const handleGoToDetailNews = (slug) => {
        navigate(`/blog/${slug}`);
    }


    // render() {
    return (
        <div>
            <Header />

            <div className="page-header-section post-title style-1">
                <div className="overlay" style={{ backgroundColor: "white" }}>
                    <div className="page-header-content">
                        <div className="container container-1310">
                            <div className="page-header-content-inner">
                                <div className="page-titles" id="hero-heading-blog" >
                                    <span className="title-texts">{blog.news_title}</span>
                                </div>
                                <p className="title-text" id="text-heading-blog2">Posted By : {blog.username + ' | ' + blog.created_at}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="blog-section blog-sections bg-ash" style={{ backgroundColor: "white", paddingTop: "0px", paddingRight: "0px" }}>
                <div className="container container-1310">
                    <div className="main-blog row">
                        <div className="col-lg-12 clo-sm-12">
                            <div className="post-item-wrapper">
                                <div className="post-item" id="post-item" style={{ paddingLeft: "10%", paddingRight: "10%" }}>
                                    <img src={blog.image} alt="blog-single" />
                                    <div
                                        dangerouslySetInnerHTML={{ __html: blog.news_desc }}
                                    />

                                    <div className="post-content entry-content">
                                        <div className="post-content-inner">


                                            <div className="tags-section entry-footer justify-content-md-between justify-content-center">
                                                <ul className="tags-part d-flex flex-wrap">
                                                    <li><i className="fa fa-tags"></i></li>
                                                    <li><span>Bagikan tulisan ini : </span> </li>
                                                </ul>
                                                <ul className="social-link-list d-flex flex-wrap">
                                                    <li><a href="#" className="facebook"><i className=" fab fa-facebook-f"></i></a></li>
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

            <section className="event-venues-about style-1" style={{ marginBottom: "100px", marginTop: "100px" }}>
                <div className="container container-1310" style={{ paddingLeft: "7%", paddingRight: "7%" }}>
                    <div className="section-header">
                        {
                            simi ? <h2>Artikel Terkait</h2> : null
                        }

                    </div>
                    <div className="section-wraper">

                        {
                            isLoading ? (
                                <Skeleton type="custom" style={{ paddingTop: "100px" }} />
                            ) : (
                                simi.map((a, i) => {
                                    if (a.news_title.length < 30) {
                                        return <div className="event-venue-item" key={i} style={{ marginBottom: "10px" }}>
                                            <div className="event-venue-item-inner" style={{ boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px", borderRadius: "10px" }}>
                                                <div className="row">
                                                    <div className="col-md-4 col-4" style={{ marginRight: "0", paddingRight: "0" }}>
                                                        <div className="event-venue-thumb" style={{ borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" }}>
                                                            <a href="#" onClick={() => handleGoToDetailNews(a.news_slug)}><img src={a.thumbnail} alt="venue" style={{ height: "100%" }} /></a>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8 col-8" style={{ marginLeft: "0", paddingLeft: "10px" }}>
                                                        <div className="event-venue-content" style={{ marginTop: "0", paddingTop: "0" }}>
                                                            <a href="#" onClick={() => handleGoToDetailNews(a.news_slug)} style={{ padding: "0", margin: "0" }}><h5 style={{ fontSize: "15px" }} className="judul-blog">{a.news_title}</h5></a>
                                                            <span style={{ fontSize: "14px", padding: "0", margin: "0" }}>{a.created_at}</span>
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
                                                            <a href="#" onClick={() => handleGoToDetailNews(a.news_slug)}><img src={a.thumbnail} alt="venue" style={{ height: "80px" }} /></a>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8 col-8" style={{ marginLeft: "0", paddingLeft: "10px" }}>
                                                        <div className="event-venue-content" style={{ marginTop: "0", paddingTop: "0" }}>
                                                            <a href="#" onClick={() => handleGoToDetailNews(a.news_slug)} style={{ padding: "0", margin: "0" }}><h5 style={{ fontSize: "15px" }} className="judul-blog">{a.news_title.substring(0, 35)}..</h5></a>
                                                            <span style={{ fontSize: "14px", padding: "0", margin: "0" }}>{a.created_at}</span>
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