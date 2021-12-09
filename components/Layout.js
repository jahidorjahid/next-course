import Head from 'next/head';
import Script from 'next/script';
import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        {/*fivicon icon*/}
        <link rel="icon" href="/assets/img/fevicon.png" />
        {/* Stylesheet */}
        <link rel="stylesheet" href="/assets/css/animate.min.css" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/magnific.min.css" />
        <link rel="stylesheet" href="/assets/css/nice-select.min.css" />
        <link rel="stylesheet" href="/assets/css/owl.min.css" />
        <link rel="stylesheet" href="/assets/css/slick-slide.min.css" />
        <link rel="stylesheet" href="/assets/css/fontawesome.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
        {/*Google Fonts*/}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header></Header>
      {children}
      <Footer></Footer>
      {/* all plugins here */}
      <Script src="/assets/js/jquery.3.6.min.js"></Script>
      <Script src="/assets/js/bootstrap.min.js"></Script>
      <Script src="/assets/js/imageloded.min.js"></Script>
      <Script src="/assets/js/counterup.js"></Script>
      <Script src="/assets/js/waypoint.js"></Script>
      <Script src="/assets/js/magnific.min.js"></Script>
      <Script src="/assets/js/isotope.pkgd.min.js"></Script>
      <Script src="/assets/js/nice-select.min.js"></Script>
      <Script src="/assets/js/fontawesome.min.js"></Script>
      <Script src="/assets/js/ripple.js"></Script>
      <Script src="/assets/js/owl.min.js"></Script>
      <Script src="/assets/js/slick-slider.min.js"></Script>
      <Script src="/assets/js/wow.min.js"></Script>
      {/* main js  */}
      <Script src="/assets/js/main.js"></Script>
    </div>
  );
};

export default Layout;
