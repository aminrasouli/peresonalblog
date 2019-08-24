import React, {Component} from "react"
import Layout from '../core/theme/Layout';
import {NextSeo} from "next-seo";
import CardProject from "../core/components/CardProject";
import Project from "../core/components/Project";

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

			<Project/>

		</Layout>;
	}
}

export default Index;