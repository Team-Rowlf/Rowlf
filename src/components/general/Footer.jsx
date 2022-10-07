import React from 'react';

import { Link } from 'react-router-dom';
const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-upper">
				<div className="address">
					<h5 className="pb-3 title-card">
						Address
					</h5>
					<p className="text">
						1234 Chef Kiss Ln.
						<br/>San Diego, CA 99999
					</p>
				</div>
				<div className="phone">
					<h5 className="title-card">
						Phone
					</h5>
					<p className="text">
					Office : +1 000 867 5309 <br/>Office : +1 000 489 4608
					</p>
				</div>
				<div className="email">
					<h5 className="title-card">
						Email
					</h5>
					<p className="text">
						support@hellokitchen.com
						<br/>Site:support@hellokitchen.com
					</p>
				</div>
				<div className="social">
					<h5 className="title-card">
						Social
					</h5>
					<div className="social-media pb-3 align-left">
						<ul>
							<li>
								<a className="icon-transition" href="#">
									<span className="mbr-iconfont socicon-facebook socicon"></span>
								</a>
							</li>
							<li>
								<a className="icon-transition" href="#">
									<span className="mbr-iconfont socicon-twitter socicon"></span>
								</a>
							</li>
							<li>
								<a className="icon-transition" href="#">
									<span className="mbr-iconfont socicon-linkedin socicon"></span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="footer-lower">
				{/* <div className="media-container-row">
					<div className="col-sm-12">
						<hr/>
					</div>
				</div> */}
				<div className="media-container-row">
					<div className="col-md-6 menu-list">
						<div className="footer-menu">
						<span className="footer-menu-item"> <a href="/">Home</a> </span><span className="footer-menu__item"> <a href="/about">About</a></span><span className="footer-menu__item"> <a href="">Contact</a></span><span className="footer-menu__item"> <a href="">Services</a></span><span className="footer-menu__item"> <a href="">Careers</a></span></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
