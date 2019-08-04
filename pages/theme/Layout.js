import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import "../../static/css/styles.scss"


class Layout extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		document.getElementById('preloder').classList.add('hide-preloder')
	}

	render() {
		return <div>
			{/* TODO:: add preloader */}
			<div id="preloder" className="animated fadeOut">
				<div className="loader"/>
			</div>
			<Header/>
				<div className="animated fadeIn faster">
					{this.props.children}
				</div>
			<Footer/>
		</div>;
	}
}

export default Layout;