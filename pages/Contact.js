import React, {Component} from "react"
import Layout from './theme/Layout';
import "../static/css/styles.scss"

class Contact extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		return <Layout>
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
						<div className="col-md-4">
							<div className="icon-box mb-5 mb-md-0">
								<div className="icon">
									<h2>۱.</h2>
								</div>
								<div className="icon-box-content">
									<h3>ایمیل</h3>
									<p> یه ایمیل به آدرس <strong>amin@rasouli.me</strong> ارسال کنید تا بیشتر با هم حرف بزنیم. </p>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="icon-box mb-5 mb-md-0">
								<div className="icon">
									<h2>۲.</h2>
								</div>
								<div className="icon-box-content">
									<h3>تلگرام</h3>
									<p>میتونید به <strong dir="ltr">@AminDev</strong> من پیام بدید تا با هم حرف بزنیم. </p>
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