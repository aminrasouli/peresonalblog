import React, {Component} from "react"
import Layout from './theme/Layout';
import "../static/css/styles.scss"

class Blog extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <Layout>
			<section className="intro-section">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<h2 className="section-title">بلاگ</h2>
						</div>
					</div>
				</div>
			</section>
			<div className="page-section">
				<div className="container">
					<div className="row mb-5">

						<div className="col-md-6">
							<div className="blog-item">
								<figure className="thumb">
									<img src="/static/img/blog/1.jpg" alt=""/>
								</figure>
								<article className="blog-content">
									<h2>متن ستون برای فرهنگ نیاز است که نیاز</h2>
									<div className="blog-meta">۲۰ دی ۱۳۹۵</div>
									<p>داشت تا صورت طراحی رسد دشواری متخصصان مجله که زمان صنعت است هدف شامل شناخت با بلکه جامعه با بیشتری شرایط دستاوردهای حال چاپگرها می توان و متخصصان هدف جامعه به دنیای تولید شناخت نرم افزارها اهل.</p>
									<a href="" className="read-more">بیشتر بخوانید</a>
								</article>
							</div>
						</div>

						<div className="col-md-6">
							<div className="blog-item">
								<figure className="thumb">
									<img src="/static/img/blog/2.jpg" alt=""/>
								</figure>
								<article className="blog-content">
									<h2>و و و در چاپ استفاده این علیالخصوص</h2>
									<div className="blog-meta">۲۰ دی ۱۳۹۵</div>
									<p>داشت تا صورت طراحی رسد دشواری متخصصان مجله که زمان صنعت است هدف شامل شناخت با بلکه جامعه با بیشتری شرایط دستاوردهای حال چاپگرها می توان و متخصصان هدف جامعه به دنیای تولید شناخت نرم افزارها اهل.</p>
									<a href="" className="read-more">بیشتر بخوانید</a>
								</article>
							</div>
						</div>

						<div className="col-md-6">
							<div className="blog-item">
								<figure className="thumb">
									<img src="/static/img/blog/3.jpg" alt=""/>
								</figure>
								<article className="blog-content">
									<h2>هدف برای در بیشتری داشت و زبان از</h2>
									<div className="blog-meta">۲۰ دی ۱۳۹۵</div>
									<p>داشت تا صورت طراحی رسد دشواری متخصصان مجله که زمان صنعت است هدف شامل شناخت با بلکه جامعه با بیشتری شرایط دستاوردهای حال چاپگرها می توان و متخصصان هدف جامعه به دنیای تولید شناخت نرم افزارها اهل.</p>
									<a href="" className="read-more">بیشتر بخوانید</a>
								</article>
							</div>
						</div>

						<div className="col-md-6">
							<div className="blog-item">
								<figure className="thumb">
									<img src="/static/img/blog/4.jpg" alt=""/>
								</figure>
								<article className="blog-content">
									<h2>تمام استفاده فراوان موجود طراحان طراحان نرم افزارها با</h2>
									<div className="blog-meta">۲۰ دی ۱۳۹۵</div>
									<p>داشت تا صورت طراحی رسد دشواری متخصصان مجله که زمان صنعت است هدف شامل شناخت با بلکه جامعه با بیشتری شرایط دستاوردهای حال چاپگرها می توان و متخصصان هدف جامعه به دنیای تولید شناخت نرم افزارها اهل.</p>
									<a href="" className="read-more">بیشتر بخوانید</a>
								</article>
							</div>
						</div>
						<div className="col-md-6">
							<div className="blog-item">
								<figure className="thumb">
									<img src="/static/img/blog/5.jpg" alt=""/>
								</figure>
								<article className="blog-content">
									<h2>جوابگوی داشت تولید قرار تمام در صورت که</h2>
									<div className="blog-meta">۲۰ دی ۱۳۹۵</div>
									<p>داشت تا صورت طراحی رسد دشواری متخصصان مجله که زمان صنعت است هدف شامل شناخت با بلکه جامعه با بیشتری شرایط دستاوردهای حال چاپگرها می توان و متخصصان هدف جامعه به دنیای تولید شناخت نرم افزارها اهل.</p>
									<a href="" className="read-more">بیشتر بخوانید</a>
								</article>
							</div>
						</div>

						<div className="col-md-6">
							<div className="blog-item">
								<figure className="thumb">
									<img src="/static/img/blog/6.jpg" alt=""/>
								</figure>
								<article className="blog-content">
									<h2>چاپگرها مورد علی الخصوص خلاقی می طلبد برای چاپگرها کاربردی</h2>
									<div className="blog-meta">۲۰ دی ۱۳۹۵</div>
									<p>داشت تا صورت طراحی رسد دشواری متخصصان مجله که زمان صنعت است هدف شامل شناخت با بلکه جامعه با بیشتری شرایط دستاوردهای حال چاپگرها می توان و متخصصان هدف جامعه به دنیای تولید شناخت نرم افزارها اهل.</p>
									<a href="" className="read-more">بیشتر بخوانید</a>
								</article>
							</div>
						</div>
					</div>
					<div className="text-center pt-5">
						<button className="site-btn btn-fade">بیشتر</button>
					</div>
				</div>
			</div>

		</Layout>;
	}
}

export default Blog;