import React, {Component} from "react"
import SocialLink from "../components/SocialLink";
import Helper from "../classes/helper";

class Footer extends Component {

	render() {
		console.log(Helper.isRoute('/'));
		return <footer className="footer-section text-center">
			<div className="container">
				<div className="copyright">

				<SocialLink isShow={!Helper.isRoute('/')}/>

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