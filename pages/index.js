import React, {Component} from "react"
import Layout from './theme/Layout';

class Index extends Component {

	render() {
		return <Layout>
			<section className="intro-section">
				<div className="container text-center">
					<div className="row">
						<div className="col-xl-10 offset-xl-1">
							<img className="avatar-intro-section" src="/static/img/avatar.png" alt="avatar"/>
							<h2 className="section-title">یک <span>توسعه دهنده ارشد وب و موبایل</span> در تهران</h2>
						</div>
					</div>
				</div>
			</section>

			<section className="portfolio-section">
				<div className="container">
				</div>
				<div className="container p-md-0 ">
					<div className="row portfolios-area">
						<div className="mix col-lg-4 col-md-6 web">
							<a href="#" className="portfolio-item set-bg"
							   style={{backgroundImage: `url("/static/img/portfolio/3.jpg")`}}>
								<div className="pi-inner">
									<h2>مشاهده پروژه +</h2>
								</div>
							</a>
						</div>
						<div className="mix col-lg-4 col-md-6 digital">
							<a href="#" className="portfolio-item set-bg"
							   style={{backgroundImage: `url("/static/img/portfolio/4.jpg")`}}>
								<div className="pi-inner">
									<h2>مشاهده پروژه +</h2>
								</div>
							</a>
						</div>
						<div className="mix col-lg-4 col-md-6 rened">
							<a href="#" className="portfolio-item set-bg"
							   style={{backgroundImage: `url("/static/img/portfolio/5.jpg")`}}>
								<div className="pi-inner">
									<h2>مشاهده پروژه +</h2>
								</div>
							</a>
						</div>

					</div>
				</div>
			</section>

		</Layout>;
	}
}

export default Index;