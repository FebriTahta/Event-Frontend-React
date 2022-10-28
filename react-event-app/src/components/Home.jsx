import React, { Component } from "react";

class Home extends Component {

    render(){
        return(
            <div>
                <section className="banner-section style-3" style={{backgroundImage: "url(assets/images/banner/02.png)", backgroundColor: "#f2f2f2" }}>
                    <div className="banner-content-area">
                        <div className="container container-1310">
                            <div className="banner-content">
                                <h1>We Are Event Professional</h1>
                                <span>Find The Conference, Festival, Exhibition, Meetup, Seaker &amp; Vanue</span>
                                <div className="banner-search sticky">
                                    <input type="text" name="type" placeholder="Search by Artist, Team or Vanue" />
                                    <i className="fas fa-search"></i>
                                    <a href="#" className="btn-defult">View Latest Events</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

}

export default Home