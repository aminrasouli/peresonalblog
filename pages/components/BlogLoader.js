import React, {Component} from "react"
import ContentLoader from "react-content-loader";

const MyLoader = () => (
    <ContentLoader
        rtl
        height={312}
        width={540}
        speed={1}
        uniquekey
    >
        <rect x="0" y="30" rx="0" ry="0" width="500" height="28" />
        <rect x="0" y="73" rx="0" ry="0" width="80" height="20" />
        <rect x="0" y="123" rx="0" ry="0" width="540" height="10" />
        <rect x="0" y="138" rx="0" ry="0" width="540" height="10" />
        <rect x="0" y="153" rx="0" ry="0" width="540" height="10" />
        <rect x="0" y="168" rx="0" ry="0" width="540" height="10" />
        <rect x="0" y="198" rx="0" ry="0" width="110" height="20" />

    </ContentLoader>
);
class BlogLoader extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="row" style={{width: '100%'}}>
            <div className="col-md-6">
                <MyLoader />
            </div>
            <div className="col-md-6">
                <MyLoader />
            </div>
            <div className="col-md-6">
                <MyLoader />
            </div>
            <div className="col-md-6">
                <MyLoader />
            </div>
        </div> ;
    }
}

export default BlogLoader;