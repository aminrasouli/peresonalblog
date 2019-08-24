import React, {Component} from "react"
import Link from 'next/link';
import CardProject from "./CardProject";

class Project extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <section className="portfolio-section">

            <div className="container p-md-0 ">
                <h3 className="project-title">پروژه ها</h3>
                <hr/>
                <div className="row portfolios-area">
                    <CardProject
                        title="نرم‌افزار مدیریت سفارشات ووکامرس"
                        img="/static/img/project/woodesktop.png"
                        date="زمستان ۹۷"
                        details="#ElectronJS,ReactJs,BootStrap,Woocommerce"
                        href="http://atbox.io/mramin/projects/NyDrl"
                    />
                    <CardProject
                        title="ویترین سایت اگهی و نیازمندی‌ها"
                        img="/static/img/project/vitrin.png"
                        date="تابستان ۹۷"
                        details="#Laravel Framework,PHP,Bootstrap,Javascript,jQuery"
                        href="http://atbox.io/mramin/projects/K7Llr"
                    />
                    <CardProject
                        title="رایاتار مجله تفریحی سرگرمی"
                        img="/static/img/project/rayatar.png"
                        date="بهار ۹۳"
                        details="#WordPress,HTML,CSS,Javascript,jQuery"
                        href="#"
                    />
                </div>
            </div>
        </section>;
    }
}

export default Project;