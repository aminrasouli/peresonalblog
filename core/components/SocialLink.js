import React, {Component} from "react"

class socialLink extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        if (this.props.isShow) {
            return <div className="social-links" style={{textAlign: 'center'}}>
                <a href=""><span className="fa fa-telegram"/></a>
                <a href=""><span className="fa fa-instagram"/></a>
                <a href=""><span className="fa fa-twitter"/></a>
                <a href=""><span className="fa fa-github"/></a>
                <a href=""><span className="fa fa-gitlab"/></a>
            </div>;
        }
        return null
    }
}

export default socialLink;