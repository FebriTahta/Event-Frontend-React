import React, { Component } from "react"

class FooterFix extends Component {
    render() {
        return (
            <div>
                <footer className="bg-dark text-light">
                    <div className="fixed-shape">
                        <img src="assets/img/footer-bg.png" alt="Shape" />
                    </div>
                    <div className="container">
                        <div className="f-items default-padding">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 item">
                                    <div className="f-item about">
                                        <img src="assets/img/logo-light.png" alt="Logo" />
                                        <p>
                                            Happen active county. Winding morning am shyness evident to. Garrets because elderly new manners however one village she.
                                        </p>
                                        <form action="#">
                                            <input type="email" placeholder="Your Email" className="form-control" name="email" />
                                            <button type="submit"> Subscribe</button>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-6 item">
                                    <div className="f-item link">
                                        <h4 className="widget-title">Explore</h4>
                                        <ul>
                                            <li>
                                                <a href="#">Our Causes</a>
                                            </li>
                                            <li>
                                                <a href="#">New Campaign</a>
                                            </li>
                                            <li>
                                                <a href="#">Site Map</a>
                                            </li>
                                            <li>
                                                <a href="#">Donate</a>
                                            </li>
                                            <li>
                                                <a href="#">Terms</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 item">
                                    <div className="f-item">
                                        <h4 className="widget-title">Contact Info</h4>
                                        <div className="address">
                                            <ul>
                                                <li>
                                                    <strong>Address:</strong>
                                                    5919 Trussville Crossings Pkwy, Birmingham AL 35235
                                                </li>
                                                <li>
                                                    <strong>Email:</strong>
                                                    <a href="mailto:info@validtheme.com">info@validtheme.com</a>
                                                </li>
                                                <li>
                                                    <strong>Phone:</strong>
                                                    <a href="tel:2151234567">+123 34598768</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 item">
                                    <div className="f-item recent-post">
                                        <h4 className="widget-title">Latest News</h4>
                                        <div className="item">
                                            <a href="#">Delighted prevailed supported too not remainder perpetual.</a>
                                            <span><i className="fas fa-calendar-alt"></i> 22 Aug, 2020 -  <a href="#">Admin</a></span>
                                        </div>
                                        <div className="item">
                                            <a href="#">Speaking trifling an to unpacked moderate debating learnin management. </a>
                                            <span><i className="fas fa-calendar-alt"></i> 15 Nov, 2020 -  <a href="#">User</a></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <p>Copyright &copy;  2020. Designed by <a href="#">validtemplatess</a></p>
                                </div>
                                <div className="col-md-6 text-right link">
                                    <ul>
                                        <li>
                                            <a href="#">Terms</a>
                                        </li>
                                        <li>
                                            <a href="#">Privacy</a>
                                        </li>
                                        <li>
                                            <a href="#">Support</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default FooterFix