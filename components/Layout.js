import Head from 'next/head';
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
      <script src="/assets/js/jquery.3.6.min.js"></script>
      <script src="/assets/js/bootstrap.min.js"></script>
      <script src="/assets/js/imageloded.min.js"></script>
      <script src="/assets/js/counterup.js"></script>
      <script src="/assets/js/waypoint.js"></script>
      <script src="/assets/js/magnific.min.js"></script>
      <script src="/assets/js/isotope.pkgd.min.js"></script>
      <script src="/assets/js/nice-select.min.js"></script>
      <script src="/assets/js/fontawesome.min.js"></script>
      <script src="/assets/js/ripple.js"></script>
      <script src="/assets/js/owl.min.js"></script>
      <script src="/assets/js/slick-slider.min.js"></script>
      <script src="/assets/js/wow.min.js"></script>
      {/* main js  */}
      <script src="/assets/js/main.js"></script>
    </div>
  );
};

export default Layout;
