import React, {Component} from "react"
import Link from 'next/link';

class Footer extends Component {

	render() {
		return <footer className="footer-section text-center">
			<div className="container">
				<h2 className="section-title mb-5">همکاری کنیم؟</h2>
				<Link href="/contact"><a className="site-btn">ارتباط با من</a></Link>
				<div className="social-links">
					<a href=""><span className="fa fa-telegram"/></a>
					<a href=""><span className="fa fa-instagram"/></a>
					<a href=""><span className="fa fa-twitter"/></a>
					<a href=""><span className="fa fa-github"/></a>
					<a href=""><span className="fa fa-gitlab"/></a>
				</div>
				<div
					className="copyright">
					 &copy; کپی رایت
					{' ۱۳۹۸ '} <br/>
					مطالب تحت لیسانس کریتیو کامنز منتشر می‌شوند. <br/>
					ساخته شده با <i className="fa fa-heart-o"
									aria-hidden="true"/>
				</div>
			</div>
		</footer>
			;
	}
}

export default Footer;