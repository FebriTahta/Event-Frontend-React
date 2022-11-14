import React, { Component } from "react"
import Logo from '../logo2.png';

class Footer extends Component {
	render() {
		return (
			<div>
				<section className="footer-section">
					<div className="top"><a href="#" className="scrollToTop"><i className="fas fa-angle-up"></i></a></div>
					<div className="footer-top padding-tb"  style={{backgroundColor:"#171717"}}>
						<div className="container container-1310" >
							<div className="row">
								<div className="col-12 col-md-6 col-lg-3 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s" >
									<div className="footer-content">
										<a href="#" className="footer-logo"><img src={Logo} style={{maxWidth:"200px"}} alt="logo" /></a>
										<p style={{color:"white"}}>World Business Conference one of the best famouse conference in 2020. Most of the speaker of this event ar business magnet.</p>
									</div>
								</div>
								<div className="col-12 col-md-6 col-lg-3 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s" >
									<div className="footer-content" >
										<div className="footer-title" >
											<h5 style={{color:"white"}}>Hubungi kami</h5>
										</div>
										<div className="footer-link-list">
											<ul>
												<li><a href="#" style={{color:"white"}}>Minlo (Mimin Lomba Official)</a></li>
												<li><a href="#" style={{color:"white"}}>0899 8820 646 (WA Only)</a></li>
											</ul>
										</div>
									</div>
								</div>
								<div className="col-12 col-md-6 col-lg-3 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
									<div className="footer-content">
										<div className="footer-title">
											<h5 style={{color:"white"}}>Info Lomba Official</h5>
										</div>
										<div className="footer-link-list">
											<ul>
												<li><a style={{color:"white"}} href="#">Blog</a></li>
												<li><a style={{color:"white"}} href="#">Penulis</a></li>
												<li><a style={{color:"white"}} href="#">Kerja Sama</a></li>
												<li><a style={{color:"white"}} href="#">Pasang Iklan</a></li>
											</ul>
										</div>
									</div>
								</div>

								<div className="col-12 col-md-6 col-lg-3 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
									<div className="footer-content">
										<div className="footer-title">
											<h5 style={{color:"white"}}>Temukan Kami</h5>
										</div>
										<div className="footer-link-list">
											<ul>
												<li><a style={{color:"white"}} href="#"><i className="fab fa-instagram"></i> Instagram</a></li>
												<li><a style={{color:"white"}} href="#"><i className="fab fa-telegram"></i> Telegram</a></li>
												<li><a style={{color:"white"}} href="#" className="fab fa-facebook"> Facebook</a></li>
											</ul>
										</div>
									</div>
								</div>

							</div>
						</div>
					</div>
				</section>
			</div>
		)
	}
}

export default Footer