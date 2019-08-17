import React, { Component } from "react"
import Layout from './theme/Layout';
import "../static/css/styles.scss"
import { NextSeo } from 'next-seo';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from "axios"
import BlogLoader from "./components/BlogLoader";
import BlogCard from "./components/BlogCard";
import Helper from "./classes/helper";

class Blog extends Component {

    static perPage = 4;

    constructor(props) {
        super(props);
        this.totalPage = props.totalPage || 1;
        this.state = { currentPage: 1, data: props.data };
    }

    static getInitialProps = () => Blog._getResponse();

    static _getResponse = async (page = 1) => {
        try {
            const response = await axios.get(`https://rasouli.me/wp-json/wp/v2/posts?per_page=${Blog.perPage}&page=${page}`);
            return { data: response.data, totalPage: parseInt(response.headers['x-wp-totalpages']) };
        } catch (e) {
            console.log(e);
            return { data: [], totalPage: 1 };
        }
    }

    fetchMore = async () => {
        let { currentPage, data = [] } = this.state;
        currentPage++;
        const response = await Blog._getResponse(currentPage);
        this.setState({ ...response, data: [...data, ...response.data], currentPage });
    }

    render() {
        const { data = [], currentPage } = this.state;
        return <Layout>
            <NextSeo
                title="بلاگ"
                titleTemplate='محمد‌امین رسولی | %s'
            />
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
                    <InfiniteScroll
                        className="row mb-5"
                        style={{
                            height: 'unset',
                            overflow: 'unset',
                            marginRight: '5px'
                        }}
                        scrollThreshold={0.9}
                        dataLength={data.length}
                        next={this.fetchMore}
                        hasMore={currentPage < this.totalPage}
                        loader={<BlogLoader />}
                        endMessage={
                            <p style={{
                                margin: 'auto',
                                fontSize: '19px',
                                fontWeight: '400',
                                color: '#001418'
                            }}>
                                <b>بله :) شما تمام مطالب بلاگ رو دیدید</b>
                            </p>}
                    >
                        {Array.isArray(data) && data.map((value, key) => (
                            <BlogCard
                                key={key}
                                slug={value.slug}
                                title={value.title.rendered}
                                content={Helper.formatExpext(value.content.rendered)}
                                date={Helper.formatDate(value.date)}
                            />
                        ))}
                    </InfiniteScroll>
                </div>
            </div>
        </Layout>;
    }
}

export default Blog;