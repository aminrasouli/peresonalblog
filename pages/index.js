import React, {Component} from "react"
import Layout from '../core/theme/Layout';
import {NextSeo} from "next-seo";
import Project from "../core/components/Project";
import SocialLink from "../core/components/SocialLink";
import Helper from "../core/classes/helper";

class Index extends Component {

    render() {
        return <Layout>
            <NextSeo
                title="صفحه اصلی"
                titleTemplate='محمد‌امین رسولی | %s'
            />
            <section className="intro-section">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-xl-10 offset-xl-1">
                            <img className="avatar-intro-section" src="/static/img/newAvatar.png" alt="avatar"/>
                            <h2 className="section-title" style={{fontWeight: 300}}>
                                Software Developer With Focus On<br/>
								<span>Full Stack Development</span>
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
            <SocialLink isShow={Helper.isRoute('/')}/>
            <Project/>

        </Layout>;
    }
}

export default Index;