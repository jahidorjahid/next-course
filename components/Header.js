import Head from 'next/head';
import React from 'react';

const Header = () => {
  return (
    <div>
      <Head>
        <title>Edufie - Online Courses Html Template</title>
      </Head>
      {/* preloader area start */}
      {/* <div className="preloader" id="preloader">
          <div className="preloader-inner">
            <div id="wave1"></div>
            <div className="spinner">
              <div className="dot1" />
              <div className="dot2" />
            </div>
          </div>
        </div> */}
      {/* preloader area end */}
      <div className="body-overlay" id="body-overlay" />
      {/* search popup area start */}
      <div className="search-popup" id="search-popup">
        <form action="home.html" className="search-form">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search....."
            />
          </div>
          <button type="submit" className="submit-btn">
            <i className="fa fa-search" />
          </button>
        </form>
      </div>
      {/* //. search Popup */}
      {/* navbar start */}
      <header className="navbar-area">
        <nav className="navbar navbar-expand-lg">
          <div className="container nav-container">
            <div className="responsive-mobile-menu">
              <button
                className="menu toggle-btn d-block d-lg-none"
                data-target="#themefie_main_menu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-left" />
                <span className="icon-right" />
              </button>
            </div>
            <div className="logo">
              <a className="main-logo" href="home.html">
                <img src="/assets/img/logo.png" alt="img" />
              </a>
            </div>
            <div className="nav-right-part nav-right-part-mobile">
              <ul>
                <li>
                  <a className="search header-search" href="#">
                    <i className="fa fa-search" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="collapse navbar-collapse" id="themefie_main_menu">
              <div className="single-input-wrap">
                <input type="text" placeholder="Search your best courses" />
                <button>
                  <i className="fa fa-search" />
                </button>
              </div>
              <ul className="navbar-nav menu-open text-end">
                <li className="current-menu-item menu-item-has-children">
                  <a href="#">Home</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="home.html">Home 01</a>
                    </li>
                    <li>
                      <a href="home-2.html">Home 02</a>
                    </li>
                    <li>
                      <a href="home-3.html">Home 03</a>
                    </li>
                    <li>
                      <a href="home-4.html">Login Home</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <a href="#">Pages</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="blog-cat.html">Blog Category</a>
                    </li>
                    <li>
                      <a href="blog-details.html">Blog Details</a>
                    </li>
                    <li>
                      <a href="course.html">Course</a>
                    </li>
                    <li>
                      <a href="course-details.html">Course Details</a>
                    </li>
                    <li>
                      <a href="category.html">Category</a>
                    </li>
                    <li>
                      <a href="instructor.html">Instructor</a>
                    </li>
                    <li>
                      <a href="instructor-details.html">Single Instructor</a>
                    </li>
                    <li>
                      <a href="dashboard.html">Dashboard</a>
                    </li>
                    <li>
                      <a href="zoom-meeting.html">Zoom with Us</a>
                    </li>
                    <li>
                      <a href="signin.html">Sign In</a>
                    </li>
                    <li>
                      <a href="signup.html">Sign Up</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="instructor.html">Become an Instructor</a>
                </li>
              </ul>
            </div>
            <div className="nav-right-part nav-right-part-desktop">
              <ul>
                <li className="right-search">
                  <a href="#">
                    <i className="fa fa-search" />
                  </a>
                  <div className="single-input-wrap">
                    <input type="text" placeholder="Search your best courses" />
                    <button>
                      <i className="fa fa-search" />
                    </button>
                  </div>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-shopping-basket" />
                  </a>
                </li>
                <li>
                  <a href="home-2.html">Log In</a>
                </li>
                <li>
                  <a href="home-2.html" className="btn btn-base-light">
                    Sign Up
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div className="category-responsive d-xl-none d-block">
        <div className="container">
          <div className="category-slider owl-carousel">
            <div className="item">
              <a href="category.html">Development</a>
            </div>
            <div className="item">
              <a href="category.html">Design</a>
            </div>
            <div className="item">
              <a href="category.html">Marketing</a>
            </div>
            <div className="item">
              <a href="category.html">Business</a>
            </div>
            <div className="item">
              <a href="category.html">Office Productivity</a>
            </div>
            <div className="item">
              <a href="category.html">Photography</a>
            </div>
            <div className="item">
              <a href="category.html">Video</a>
            </div>
            <div className="item">
              <a href="category.html">Health &amp; Fitness</a>
            </div>
            <div className="item">
              <a href="category.html">Music</a>
            </div>
            <div className="item">
              <a href="category.html">IT &amp; Software</a>
            </div>
          </div>
        </div>
      </div>
      <div className="category-navbar navbar-area d-xl-block d-none">
        <nav className="navbar navbar-expand-lg">
          <div className="container nav-container">
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav menu-open">
                <li>
                  <a href="category.html">Development</a>
                </li>
                <li>
                  <a href="category.html">Design</a>
                </li>
                <li>
                  <a href="category.html">Marketing</a>
                </li>
                <li>
                  <a href="category.html">Business</a>
                </li>
                <li>
                  <a href="category.html">Office Productivity</a>
                </li>
                <li>
                  <a href="category.html">Photography &amp; Video</a>
                </li>
                <li>
                  <a href="category.html">Health &amp; Fitness</a>
                </li>
                <li>
                  <a href="category.html">Music</a>
                </li>
                <li>
                  <a href="category.html">IT &amp; Software</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {/* navbar end */}
    </div>
  );
};

export default Header;
