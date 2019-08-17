import React, { Component } from 'react';
import Layout from './theme/Layout';
import {NextSeo} from "next-seo";

class About extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		return <Layout>
			<NextSeo
				title="درباره ‌من"
				titleTemplate = 'محمد‌امین رسولی | %s'
			/>
			<section className="intro-section">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<h2 className="section-title">درباره من</h2>
						</div>
					</div>
				</div>
			</section>
			<section className="page-section">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 about-me">
							<div>
								<h3>زین دو هزاران من و ما، ای عجبا من چه منم؟</h3>
								<br/>
								<p>من ، محمد‌امین رسولی یک <a
									href="https://en.wikipedia.org/wiki/Server-side_scripting">توسعه‌دهنده سمت سرور
									(Back-end)</a>،&nbsp;آشنا به <a
									href="https://en.wikipedia.org/wiki/Front-end_web_development">طراحی وب
									(Front-end)</a>&nbsp;و مسلط به <a href="http://wordpress.org">وردپرس </a>هستم
									.&nbsp;به <a href="http://php.net">php</a> خیلی علاقه دارم از بین فریمورک های این
									زبان&nbsp;<a href="http://laravel.com">لاراول&nbsp;</a>را میپسندم و مدتی هست که
									درگیر جاوااسکریپت شدم و در حال کار با فریم ورک های آن هستم.</p>
							</div>
							<div>
								<h4>علاقه‌مند به:</h4><br/>
								<ul dir="rtl">
									<li>یادگیری جاوا اسکریپت و سایز زبان های اسکریپت نویسی</li>
									<li>تحقیق و مطالعه در مورد شیوه&zwnj;های رمزنگاری اطلاعات و مباحث امنیت</li>
									<li>موسیقی پاپ و راک</li>
									<li>رابط کاربری و تجربه کاربری (UI/UX)</li>
									<li>مطالعه درباره &nbsp;هوافضا و فلسفه</li>
									<li>مهندسی نرم‌افزار</li>
									<li>قهوه &nbsp;☕</li>
								</ul>
								<br/>
							</div>
							<div>
								<h4>آشنایی:</h4><br/>
								<ul dir="ltr" style={{textAlign: 'left'}}>
									<li>PHP and Laravel</li>
									<li>Git and Github</li>
									<li>Wordpress</li>
									<li>Javascript and jQuery</li>
									<li>React and Vue</li>
									<li>NextJS and ElectronJS</li>
									<li>Linux and Unix</li>
									<li>...</li>
								</ul>

							</div>
						</div>
						<div className="col-lg-5 offset-lg-1">
							<figure className="pic-frame">
								<img src="/static/img/about.png" alt=""/>
							</figure>
						</div>
					</div>
				</div>
			</section>

		</Layout>;
	}
}

export default About;