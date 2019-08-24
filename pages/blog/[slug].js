import React, {Component} from 'react';
import Layout from '../../core/theme/Layout';
import {NextSeo} from "next-seo";
import axios from "axios";
import '../../static/js/prismjs'
import Helper from "../../core/classes/helper";
import Link from "../../core/components/Link";

class BlogPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slug: '',
            data: {
                title: {rendered: ' '},
                content: {rendered: ' '},
                date: ''
            }
        };
    };

    componentDidMount() {
        document.querySelectorAll('pre').forEach((pre) => {
            if (pre.className.includes('jscript')) {
                pre.className = pre.className.replace(/brush:\s*(.+?)\s*;/ig, 'language-javascript');
            } else {
                pre.className = pre.className.replace(/brush:\s*(.+?)\s*;/ig, 'language-$1 $1');
            }
            Prism.highlightElement(pre);
        });

    }

    static async getInitialProps(context) {
        const {slug} = context.query;
        try {
            const response = await axios.get(`https://rasouli.me/wp-json/wp/v2/posts?slug=${slug}`);
            return {data: response.data[0]};
        } catch (e) {
            console.log(e);
        }

    };

    render() {
        return <Layout>
            <NextSeo
                title={this.props.data.title.rendered}
                titleTemplate='محمد‌امین رسولی | %s'
            />
            <section className="intro-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div>
                                <div className="angle-double">
                                    <Link href="/blog">
                                        <a><span className="fa fa-angle-double-right"/> </a>
                                    </Link>
                                </div>
                                <div>
                                    <h2 className="section-title">{this.props.data.title.rendered}</h2>
                                    <div
                                        className="blog-meta">{this.props.data.date && Helper.formatDate(this.props.data.date)}</div>
                                </div>
                            </div>
                            <div className="content-blog"
                                 dangerouslySetInnerHTML={{__html: this.props.data.content.rendered}}
                            />
                        </div>
                    </div>
                    <hr/>
                </div>
            </section>

        </Layout>;
    }
}

export default BlogPost;