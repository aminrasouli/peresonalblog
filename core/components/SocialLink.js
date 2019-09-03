import React, {Component} from "react"

class socialLink extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        if (this.props.isShow) {
            return <div className="social-links" style={{textAlign: 'center'}}>
                <a href="http://telegram.me/AminDev"><span className="fa fa-telegram"/></a>
                <a href="http://instagram.com/mmdamin.me"><span className="fa fa-instagram"/></a>
                <a href="https://twitter.com/rasouli_me"><span className="fa fa-twitter"/></a>
                <a href="https://github.com/aminrasouli"><span className="fa fa-github"/></a>
                <a href="https://gitlab.com/aminrasouli"><span className="fa fa-gitlab"/></a>
            </div>;
        }
        return null
    }
}

export default socialLink;