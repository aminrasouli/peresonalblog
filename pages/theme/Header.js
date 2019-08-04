import React, {Component} from "react"
import Link from '../components/Link';

class Header extends Component {
	constructor(props) {
		super(props);
		this.responsiveBtn = this.responsiveBtn.bind(this);
	}
	responsiveBtn(e) {
		e.preventDefault();
		let x = document.querySelector('.main-menu');
		x.classList.add('animated','fadeIn');
		x.classList.toggle('show-main-menu');
	}
	render() {
		return <header className="header-section">
			<div className="container">
				<div className="row">
					<div className="col-lg-2 col-md-3">
						<div className="logo">
							<h2 className="site-logo"><Link href="/"><a>محمد‌امین رسولی</a></Link></h2>
						</div>
					</div>
					<div className="col-lg-10 col-md-9">
							<Link href="contact"><a className="site-btn header-btn">همکاری</a></Link>
						<nav className="main-menu">
							<ul>
								<li><Link activeClassName='active' href="/blog"><a>بلاگ</a></Link></li>
								<li><Link activeClassName='active' href="/about"><a>درباره</a></Link></li>
								<li><Link activeClassName='active' href="/contact"><a>تماس</a></Link></li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
			<div className="nav-switch" onClick={this.responsiveBtn}>
				<i className="fa fa-bars"/>
			</div>
		</header>
			;
	}
}

export default Header;