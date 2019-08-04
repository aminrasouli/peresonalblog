import React, {Component} from "react"
import Layout from './theme/Layout';
import "../static/css/styles.scss"

class Blog extends Component {
    constructor(props) {
        super(props);
    }
    static getInitialProps({ res, err }) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null;
        return { statusCode }
    }
    render() {
        return <Layout>
            <section className="intro-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="section-title"><i className="fa fa-bug"/> خطا!</h2>
                        </div>
                    </div>
                </div>
            </section>
            <div className="page-section">
                <div className="container">
                        <p>
                            {this.props.statusCode
                                ? `یک خطا با کد  ${this.props.statusCode} روی سرور اتفاق افتاده است. :((( `
                                : 'یک خطا سمت کاربر رخ داده است :(('}
                        </p>
                </div>
            </div>

        </Layout>;
    }
}

export default Blog;