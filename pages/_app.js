import React from 'react'
import App, { Container } from 'next/app'
import NProgress from 'nprogress'
import Router from 'next/router'
import { DefaultSeo } from 'next-seo';

Router.events.on('routeChangeStart', url => {
    NProgress.start()
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default class MyApp extends App {
    static async getInitialProps ({ Component, router, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }

    render () {
        const { Component, pageProps } = this.props;
        return (
            <Container>
                <DefaultSeo
                    title={'محمد‌امین رسولی'}
                openGraph={{
                        type: 'website',
                        locale: 'fa_IR',
                        url: 'https://amin.rasouli.me',
                        site_name: 'محمد‌امین رسولی',
                    }}
                    twitter={{
                        handle: '@rasouli_me',
                        site: '@rasouli_me',
                        cardType: 'summary_large_image',
                    }}
                />
                <Component {...pageProps} />
            </Container>
        )
    }
}