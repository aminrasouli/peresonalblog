import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import "../../static/css/styles.scss"
import Head from 'next/head'

class Layout extends Component {
	constructor(props) {
		super(props);
}

	render() {
		return <div>
			<Head>
				<link rel="manifest" href="/static/manifest.json"/>
				<link rel="icon" type="image/png" sizes="32x32" href="/static/img/icon/favicon-32x32.png"/>
				<link rel="icon" type="image/png" sizes="16x16" href="/static/img/icon/favicon-16x16.png"/>
				<meta name="theme-color" content="#ffffff"/>

				<link rel="apple-touch-icon" sizes="180x180" href="/static/img/icon/apple-touch-icon.png"/>
				<meta name="apple-mobile-web-app-capable" content="yes"/>
				<meta name="apple-mobile-web-app-status-bar-style" content="black"/>
				<meta name="apple-mobile-web-app-title" content="Weather PWA"/>
			</Head>
			<Header/>
				<div className="animated fadeIn faster">
					{this.props.children}
				</div>
			<Footer/>
		</div>;
	}
}

export default Layout;