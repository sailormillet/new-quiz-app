import App, { Container } from 'next/app';
import React from 'react';

export default class MyApp extends App {
  //如果页面有getInitialProps函数，要先执行页面的getInitialProps，然后当做pageProps传递给页面
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  // componentDidMount(){
  //     Router.events.on('routeChangeStart', ()=>{
  //     })

  //     Router.events.on('routeChangeComplete',  ()=>{
  //     })
  // }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}
