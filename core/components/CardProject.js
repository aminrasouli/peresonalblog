import React, {Component} from "react"
import Link from 'next/link';

class CardProject extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="col-md-4">
            <div className="card mb-4 shadow-sm card-project">
                <div className="card-project-img-mask">
                    <img className="card-project-image" src={this.props.img}/>
                </div>
                <div className="card-body card-project-body">
                    <h4 className="card-project-title">{this.props.title}</h4>
                    <div className="card-project-details">
                        <time className="card-project-time">{this.props.date}</time>
                        <br/>
                        <span className="card-project-text">{this.props.details}</span>
                    </div>
                    <br/>
                    <div className="pull-left">
                        <a href={this.props.href}>
                            <button type="button" className="btn btn-sm btn-outline-secondary card-project-button">بیشتر</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default CardProject;