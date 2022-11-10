import React, { Component } from "react";
import { useEffect, useState } from "react";
import Header from '../common/Header';
import Footer from '../common/Footer';
import { useParams } from "react-router-dom";

// class DetailE extends Component {
function DaftarN() {

    const [news, setNews] = useState([]);
    const { slug } = useParams();

    useEffect(() => {
        fetch(`https://nurulfalah.org/api/detail/${slug}`)
            .then((response) => response.json())
            .then((data) => {
                setNews(data.data);
            })
            .catch((err) => console.log(err));
        console.log(news);
    }, [slug]);


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
                            <div class="page-header-content-inner">
                                <div class="page-title">
                                    <div className="row">
                                        <div className="col-1 col-md-1"></div>
                                        <div className="col-10 col-md-10">
                                            <span class="title-text" style={{ color: "grey" }}>{news.judul}</span>
                                        </div>
                                        <div className="col-1 col-md-1"></div>
                                    </div>

                                </div>
                                <ol class="breadcrumb">
                                    <li class="active" style={{ color: "grey" }}>Oleh : Anang Khoiri</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <Footer />
        </div>
    )
    // }

}

export default DaftarN