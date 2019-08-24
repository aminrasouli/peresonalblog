import React, {Component} from "react"
import Layout from '../core/theme/Layout';
import "../static/css/styles.scss"
import {NextSeo} from "next-seo";

class Contact extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		return <Layout>
			<NextSeo
				title="تماس با من"
				titleTemplate = 'محمد‌امین رسولی | %s'
			/>
			<section className="intro-section">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<h2 className="section-title">تماس با من</h2>
						</div>
					</div>
				</div>
			</section>
			<section className="page-section">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<div className="icon-box mb-5 mb-md-0">
								<div className="icon">
									<h2><i className="fa fa-envelope"/></h2>
								</div>
								<div className="icon-box-content">
									<h3>ایمیل</h3>
									<p>
										یه ایمیل به آدرس
										<code> amin@rasouli.me </code>
										 ارسال کنید تا بیشتر با هم حرف بزنیم.
									</p>
									<a href="mailto:amin@rasouli.me">
										<button style={{margin: 0}} className="site-btn btn-line mr-4 mb-2">ارسال ایمیل</button>
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="icon-box mb-5 mb-md-0">
								<div className="icon">
									<h2><i className="fa fa-telegram"/></h2>
								</div>
								<div className="icon-box-content">
									<h3> تلگرام</h3>
									<p>میتونید به ای‌دی من<code dir="ltr"> @AminDev </code>  پیام بدید تا با هم حرف بزنیم. </p>
									<a href="tg://resolve?domain=amindev">
										<button style={{margin: 0}} className="site-btn btn-line mr-4 mb-2">ارسال پیام در تلگرام</button>
									</a>
								</div>
							</div>
						</div>

					</div>
				</div>
			</section>
		</Layout>;
	}
}

export default Contact;