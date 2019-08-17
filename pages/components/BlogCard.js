import React, {Component} from "react"
import Link from 'next/link';

class BlogCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="col-md-6">
            <div className="blog-item">
                <article className="blog-content">
                    <Link href="blog/[slug]" as={`blog/${this.props.slug}`}>
                        <a><h2>{this.props.title}</h2></a>
                    </Link>
                    <div className="blog-meta">{this.props.date}</div>
                    <p>{this.props.content}</p>
                    <Link href="blog/[slug]" as={`blog/${this.props.slug}`}>
                        <a className="read-more">بیشتر بخوانید</a>
                    </Link>
                </article>
            </div>
        </div>;
    }
}

export default BlogCard;