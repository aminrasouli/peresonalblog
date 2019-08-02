import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import "../../static/css/styles.scss"


class Layout extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <div>
			<Header/>
				<div className="animated fadeIn faster">
					{this.props.children}
				</div>
			<Footer/>
		</div>;
	}
}

export default Layout;