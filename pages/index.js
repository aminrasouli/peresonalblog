import React, {Component} from "react"
import Layout from './theme/Layout';
import {NextSeo} from "next-seo";
import CardProject from "./components/CardProject";

class Index extends Component {

	render() {
		return <Layout>
			<NextSeo
				title="خانه"
				titleTemplate = 'محمد‌امین رسولی | %s'
			/>
			<section className="intro-section">
				<div className="container text-center">
					<div className="row">
						<div className="col-xl-10 offset-xl-1">
							<img className="avatar-intro-section" src="/static/img/avatar.png" alt="avatar"/>
							<h2 className="section-title" style={{fontWeight: 300}}>یک <span>توسعه دهنده ارشد وب و موبایل</span> در تهران</h2>
						</div>
					</div>
				</div>
			</section>

			<section className="portfolio-section">

				<div className="container p-md-0 ">
					<h3 className="project-title">پروژه ها</h3>
					<hr/>
					<div className="row portfolios-area">
						<CardProject
							title="نرم‌افزار مدیریت سفارشات ووکامرس"
							img="/static/img/project/woodesktop.png"
							date="۲۰ دی ۱۳۹۵"
							details="#ElectronJS,ReactJs,BootStrap,Woocommerce"
							href="http://atbox.io/mramin/projects/NyDrl"
						/>
						<CardProject
							title="ویترین سایت اگهی و نیازمندی‌ها"
							img="/static/img/project/vitrin.png"
							date="۲۰ دی ۱۳۹۵"
							details="#Laravel Framework,PHP,Bootstrap,Javascript,jQuery"
							href="http://atbox.io/mramin/projects/K7Llr"
						/>
						<CardProject
							title="رایاتار مجله تفریحی سرگرمی"
							img="/static/img/project/rayatar.png"
							date="۲۰ دی ۱۳۹۵"
							details="#WordPress,HTML,CSS,Javascript,jQuery"
							href="#"
						/>
					</div>
				</div>
			</section>

		</Layout>;
	}
}

export default Index;