import React from 'react';

const MostEnrolledCourses = () => {
  return (
    <section className="enllor-courses-area pd-top-120 pd-bottom-140">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>Most Students Enllor</h2>
            </div>
          </div>
          <div className="col-lg-12">
            <ul className="edl-nav nav nav-pills">
              <li className="nav-item">
                <button
                  className="nav-link active"
                  id="pills-7-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-7"
                >
                  All Course
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  id="pills-8-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-8"
                >
                  Python
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  id="pills-9-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-9"
                >
                  UI Design
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  id="pills-10-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-10"
                >
                  Php
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  id="pills-11-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-11"
                >
                  HTML
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  id="pills-12-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-12"
                >
                  CSS
                </button>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane fade show active" id="pills-7">
                <div className="course-slider owl-carousel">
                  <div className="item">
                    <div className="single-course-wrap">
                      <div className="thumb">
                        <a href="#" className="cat cat-blue">
                          Beginner
                        </a>
                        <img src="/assets/img/course/1.png" alt="img" />
                      </div>
                      <div className="wrap-details">
                        <h6>
                          <a href="#">
                            PHP for Beginners - Become a PHP Master - CMS
                            Project
                          </a>
                        </h6>
                        <div className="user-area">
                          <div className="user-details">
                            <img src="/assets/img/author/1.png" alt="img" />
                            <a href="#">Jessica Jessy</a>
                          </div>
                          <div className="user-rating">
                            <span>
                              <i className="fa fa-star" />
                              4.9
                            </span>
                            (76)
                          </div>
                        </div>
                        <div className="price-wrap">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <a href="#">Development</a>
                            </div>
                            <div className="col-6 text-end">
                              <div className="price">$30</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-course-wrap">
                      <div className="thumb">
                        <a href="#" className="cat cat-blue">
                          Beginner
                        </a>
                        <img src="/assets/img/course/5.png" alt="img" />
                      </div>
                      <div className="wrap-details">
                        <h6>
                          <a href="#">Java (Beginner) Programming Tutorials</a>
                        </h6>
                        <div className="user-area">
                          <div className="user-details">
                            <img src="/assets/img/author/1.png" alt="img" />
                            <a href="#">Jessica Jessy</a>
                          </div>
                          <div className="user-rating">
                            <span>
                              <i className="fa fa-star" />
                              4.9
                            </span>
                            (76)
                          </div>
                        </div>
                        <div className="price-wrap">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <a href="#">Development</a>
                            </div>
                            <div className="col-6 text-end">
                              <div className="price">$30</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="single-course-wrap">
                      <div className="thumb">
                        <a href="#" className="cat cat-red">
                          Expert
                        </a>
                        <img src="/assets/img/course/2.png" alt="img" />
                      </div>
                      <div className="wrap-details">
                        <h6>
                          <a href="#">Best way learn fundamentals of design.</a>
                        </h6>
                        <div className="user-area">
                          <div className="user-details">
                            <img src="/assets/img/author/1.png" alt="img" />
                            <a href="#">Jessica Jessy</a>
                          </div>
                          <div className="user-rating">
                            <span>
                              <i className="fa fa-star" />
                              4.9
                            </span>
                            (76)
                          </div>
                        </div>
                        <div className="price-wrap">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <a href="#">Development</a>
                            </div>
                            <div className="col-6 text-end">
                              <div className="price">$30</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-course-wrap">
                      <div className="thumb">
                        <a href="#" className="cat cat-blue">
                          Beginner
                        </a>
                        <img src="/assets/img/course/6.png" alt="img" />
                      </div>
                      <div className="wrap-details">
                        <h6>
                          <a href="#">
                            Time Management Mastery: Do More, Stress Less
                          </a>
                        </h6>
                        <div className="user-area">
                          <div className="user-details">
                            <img src="/assets/img/author/1.png" alt="img" />
                            <a href="#">Jessica Jessy</a>
                          </div>
                          <div className="user-rating">
                            <span>
                              <i className="fa fa-star" />
                              4.9
                            </span>
                            (76)
                          </div>
                        </div>
                        <div className="price-wrap">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <a href="#">Development</a>
                            </div>
                            <div className="col-6 text-end">
                              <div className="price">$30</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="single-course-wrap">
                      <div className="thumb">
                        <a href="#" className="cat cat-green">
                          All Level
                        </a>
                        <img src="/assets/img/course/3.png" alt="img" />
                      </div>
                      <div className="wrap-details">
                        <h6>
                          <a href="#">
                            About latest tips news and course for Illustration
                            2021
                          </a>
                        </h6>
                        <div className="user-area">
                          <div className="user-details">
                            <img src="/assets/img/author/1.png" alt="img" />
                            <a href="#">Jessica Jessy</a>
                          </div>
                          <div className="user-rating">
                            <span>
                              <i className="fa fa-star" />
                              4.9
                            </span>
                            (76)
                          </div>
                        </div>
                        <div className="price-wrap">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <a href="#">Development</a>
                            </div>
                            <div className="col-6 text-end">
                              <div className="price">$30</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-course-wrap">
                      <div className="thumb">
                        <a href="#" className="cat cat-blue">
                          Beginner
                        </a>
                        <img src="/assets/img/course/2.png" alt="img" />
                      </div>
                      <div className="wrap-details">
                        <h6>
                          <a href="#">
                            Search Engine Optimization Tips and Tricks
                          </a>
                        </h6>
                        <div className="user-area">
                          <div className="user-details">
                            <img src="/assets/img/author/1.png" alt="img" />
                            <a href="#">Jessica Jessy</a>
                          </div>
                          <div className="user-rating">
                            <span>
                              <i className="fa fa-star" />
                              4.9
                            </span>
                            (76)
                          </div>
                        </div>
                        <div className="price-wrap">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <a href="#">Development</a>
                            </div>
                            <div className="col-6 text-end">
                              <div className="price">$30</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="single-course-wrap">
                      <div className="thumb">
                        <a href="#" className="cat cat-blue">
                          Beginner
                        </a>
                        <img src="/assets/img/course/4.png" alt="img" />
                      </div>
                      <div className="wrap-details">
                        <h6>
                          <a href="#">
                            Email &amp; Affiliate Marketing Mastermind
                          </a>
                        </h6>
                        <div className="user-area">
                          <div className="user-details">
                            <img src="/assets/img/author/1.png" alt="img" />
                            <a href="#">Jessica Jessy</a>
                          </div>
                          <div className="user-rating">
                            <span>
                              <i className="fa fa-star" />
                              4.9
                            </span>
                            (76)
                          </div>
                        </div>
                        <div className="price-wrap">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <a href="#">Development</a>
                            </div>
                            <div className="col-6 text-end">
                              <div className="price">$30</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-course-wrap">
                      <div className="thumb">
                        <a href="#" className="cat cat-blue">
                          Beginner
                        </a>
                        <img src="/assets/img/course/7.png" alt="img" />
                      </div>
                      <div className="wrap-details">
                        <h6>
                          <a href="#">
                            Python Programming Tutorials (Computer Science)
                          </a>
                        </h6>
                        <div className="user-area">
                          <div className="user-details">
                            <img src="/assets/img/author/1.png" alt="img" />
                            <a href="#">Jessica Jessy</a>
                          </div>
                          <div className="user-rating">
                            <span>
                              <i className="fa fa-star" />
                              4.9
                            </span>
                            (76)
                          </div>
                        </div>
                        <div className="price-wrap">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <a href="#">Development</a>
                            </div>
                            <div className="col-6 text-end">
                              <div className="price">$30</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-8">
                <div className="course-slider owl-carousel">
                  <div className="item">
                    <div className="single-course-wrap">
                      <div className="thumb">
                        <a href="#" className="cat cat-blue">
                          Beginner
                        </a>
                        <img src="/assets/img/course/2.png" alt="img" />
                      </div>
                      <div className="wrap-details">
                        <h6>
                          <a href="#">
                            PHP for Beginners - Become a PHP Master - CMS
                            Project
                          </a>
                        </h6>
                        <div className="user-area">
                          <div className="user-details">
                            <img src="/assets/img/author/1.png" alt="img" />
                            <a href="#">Jessica Jessy</a>
                          </div>
                          <div className="user-rating">
                            <span>
                              <i className="fa fa-star" />
                              4.9
                            </span>
                            (76)
                          </div>
                        </div>
                        <div className="price-wrap">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <a href="#">Development</a>
                            </div>
                            <div className="col-6 text-end">
                              <div className="price">$30</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-course-wrap">
                      <div className="thumb">
                        <a href="#" className="cat cat-blue">
                          Beginner
                        </a>
                        <img src="/assets/img/course/6.png" alt="img" />
                      </div>
                      <div className="wrap-details">
                        <h6>
                          <a href="#">Java (Beginner) Programming Tutorials</a>
                        </h6>
                        <div className="user-area">
                          <div className="user-details">
                            <img src="/assets/img/author/1.png" alt="img" />
                            <a href="#">Jessica Jessy</a>
                          </div>
                          <div className="user-rating">
                            <span>
                              <i className="fa fa-star" />
                              4.9
                            </span>
                            (76)
                          </div>
                        </div>
                        <div className="price-wrap">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <a href="#">Development</a>
                            </div>
                            <div className="col-6 text-end">
                              <div className="price">$30</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="single-course-wrap">
                      <div className="thumb">
                        <a href="#" className="cat cat-red">
                          Expert
                        </a>
                        <img src="/assets/img/course/3.png" alt="img" />
                      </div>
                      <div className="wrap-details">
                        <h6>
                          <a href="#">Best way learn fundamentals of design.</a>
                        </h6>
                        <div className="user-area">
                          <div className="user-details">
                            <img src="/assets/img/author/1.png" alt="img" />
                            <a href="#">Jessica Jessy</a>
                          </div>
                          <div className="user-rating">
                            <span>
                              <i className="fa fa-star" />
                              4.9
                            </span>
                            (76)
                          </div>
                        </div>
                        <div className="price-wrap">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <a href="#">Development</a>
                            </div>
                            <div className="col-6 text-end">
                              <div className="price">$30</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-course-wrap">
                      <div className="thumb">
                        <a href="#" className="cat cat-blue">
                          Beginner
                        </a>
                        <img src="/assets/img/course/7.png" alt="img" />
                      </div>
                      <div className="wrap-details">
                        <h6>
                          <a href="#">
                            Time Management Mastery: Do More, Stress Less
                          </a>
                        </h6>
                        <div className="user-area">
                          <div className="user-details">
                            <img src="/assets/img/author/1.png" alt="img" />
                            <a href="#">Jessica Jessy</a>
                          </div>
                          <div className="user-rating">
                            <span>
                              <i className="fa fa-star" />
                              4.9
                            </span>
                            (76)
                          </div>
                        </div>
                        <div className="price-wrap">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <a href="#">Development</a>
                            </div>
                            <div className="col-6 text-end">
                              <div className="price">$30</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="single-course-wrap">
                      <div className="thumb">
                        <a href="#" className="cat cat-green">
                          All Level
                        </a>
                        <img src="/assets/img/course/4.png" alt="img" />
                      </div>
                      <div className="wrap-details">
                        <h6>
                          <a href="#">
                            About latest tips news and course for Illustration
                            2021
                          </a>
                        </h6>
                        <div className="user-area">
                          <div className="user-details">
                            <img src="/assets/img/author/1.png" alt="img" />
                            <a href="#">Jessica Jessy</a>
                          </div>
                          <div className="user-rating">
                            <span>
                              <i className="fa fa-star" />
                              4.9
                            </span>
                            (76)
                          </div>
                        </div>
                        <div className="price-wrap">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <a href="#">Development</a>
                            </div>
                            <div className="col-6 text-end">
                              <div className="price">$30</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-course-wrap">
                      <div className="thumb">
                        <a href="#" className="cat cat-blue">
                          Beginner
                        </a>
                        <img src="/assets/img/course/3.png" alt="img" />
                      </div>
                      <div className="wrap-details">
                        <h6>
                          <a href="#">
                            Search Engine Optimization Tips and Tricks
                          </a>
                        </h6>
                        <div className="user-area">
                          <div className="user-details">
                            <img src="/assets/img/author/1.png" alt="img" />
                            <a href="#">Jessica Jessy</a>
                          </div>
                          <div className="user-rating">
                            <span>
                              <i className="fa fa-star" />
                              4.9
                            </span>
                            (76)
                          </div>
                        </div>
                        <div className="price-wrap">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <a href="#">Development</a>
                            </div>
                            <div className="col-6 text-end">
                              <div className="price">$30</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="single-course-wrap">
                      <div className="thumb">
                        <a href="#" className="cat cat-blue">
                          Beginner
                        </a>
                        <img src="/assets/img/course/5.png" alt="img" />
                      </div>
                      <div className="wrap-details">
                        <h6>
                          <a href="#">
                            Email &amp; Affiliate Marketing Mastermind
                          </a>
                        </h6>
                        <div className="user-area">
                          <div className="user-details">
                            <img src="/assets/img/author/1.png" alt="img" />
                            <a href="#">Jessica Jessy</a>
                          </div>
                          <div className="user-rating">
                            <span>
                              <i className="fa fa-star" />
                              4.9
                            </span>
                            (76)
                          </div>
                        </div>
                        <div className="price-wrap">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <a href="#">Development</a>
                            </div>
                            <div className="col-6 text-end">
                              <div className="price">$30</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-course-wrap">
                      <div className="thumb">
                        <a href="#" className="cat cat-blue">
                          Beginner
                        </a>
                        <img src="/assets/img/course/1.png" alt="img" />
                      </div>
                      <div className="wrap-details">
                        <h6>
                          <a href="#">
                            Python Programming Tutorials (Computer Science)
                          </a>
                        </h6>
                        <div className="user-area">
                          <div className="user-details">
                            <img src="/assets/img/author/1.png" alt="img" />
                            <a href="#">Jessica Jessy</a>
                          </div>
                          <div className="user-rating">
                            <span>
                              <i className="fa fa-star" />
                              4.9
                            </span>
                            (76)
                          </div>
                        </div>
                        <div className="price-wrap">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <a href="#">Development</a>
                            </div>
                            <div className="col-6 text-end">
                              <div className="price">$30</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-9">
                <div className="course-slider owl-carousel">
                  <div className="item">
                    <div className="single-course-wrap">
                      <div className="thumb">
                        <a href="#" className="cat cat-blue">
                          Beginner
                        </a>
                        <img src="/assets/img/course/1.png" alt="img" />
                      </div>
                      <div className="wrap-details">
                        <h6>
                          <a href="#">
                            PHP for Beginners - Become a PHP Master - CMS
                            Project
                          </a>
                        </h6>
                        <div className="user-area">
                          <div className="user-details">
                            <img src="/assets/img/author/1.png" alt="img" />
                            <a href="#">Jessica Jessy</a>
                          </div>
                          <div className="user-rating">
                            <span>
                              <i className="fa fa-star" />
                              4.9
                            </span>
                            (76)
                          </div>
                        </div>
                        <div className="price-wrap">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <a href="#">Development</a>
                            </div>
                            <div className="col-6 text-end">
                              <div className="price">$30</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-course-wrap">
                      <div className="thumb">
                        <a href="#" className="cat cat-blue">
                          Beginner
                        </a>
                        <img src="/assets/img/course/5.png" alt="img" />
                      </div>
                      <div className="wrap-details">
                        <h6>
                          <a href="#">Java (Beginner) Programming Tutorials</a>
                        </h6>
                        <div className="user-area">
                          <div className="user-details">
                            <img src="/assets/img/author/1.png" alt="img" />
                            <a href="#">Jessica Jessy</a>
                          </div>
                          <div className="user-rating">
                            <span>
                              <i className="fa fa-star" />
                              4.9
                            </span>
                            (76)
                          </div>
                        </div>
                        <div className="price-wrap">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <a href="#">Development</a>
                            </div>
                            <div className="col-6 text-end">
                              <div className="price">$30</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="single-course-wrap">
                      <div className="thumb">
                        <a href="#" className="cat cat-red">
                          Expert
                        </a>
                        <img src="/assets/img/course/2.png" alt="img" />
                      </div>
                      <div className="wrap-details">
                        <h6>
                          <a href="#">Best way learn fundamentals of design.</a>
                        </h6>
                        <div className="user-area">
                          <div className="user-details">
                            <img src="/assets/img/author/1.png" alt="img" />
                            <a href="#">Jessica Jessy</a>
                          </div>
                          <div className="user-rating">
                            <span>
                              <i className="fa fa-star" />
                              4.9
                            </span>
                            (76)
                          </div>
                        </div>
                        <div className="price-wrap">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <a href="#">Development</a>
                            </div>
                            <div className="col-6 text-end">
                              <div className="price">$30</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-course-wrap">
                      <div className="thumb">
                        <a href="#" className="cat cat-blue">
                          Beginner
                        </a>
                        <img src="/assets/img/course/6.png" alt="img" />
                      </div>
                      <div className="wrap-details">
                        <h6>
                          <a href="#">
                            Time Management Mastery: Do More, Stress Less
                          </a>
                        </h6>
                        <div className="user-area">
                          <div className="user-details">
                            <img src="/assets/img/author/1.png" alt="img" />
                            <a href="#">Jessica Jessy</a>
                          </div>
                          <div className="user-rating">
                            <span>
                              <i className="fa fa-star" />
                              4.9
                            </span>
                            (76)
                          </div>
                        </div>
                        <div className="price-wrap">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <a href="#">Development</a>
                            </div>
                            <div className="col-6 text-end">
                              <div className="price">$30</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="single-course-wrap">
                      <div className="thumb">
                        <a href="#" className="cat cat-green">
                          All Level
                        </a>
                        <img src="/assets/img/course/3.png" alt="img" />
                      </div>
                      <div className="wrap-details">
                        <h6>
                          <a href="#">
                            About latest tips news and course for Illustration
                            2021
                          </a>
                        </h6>
                        <div className="user-area">
                          <div className="user-details">
                            <img src="/assets/img/author/1.png" alt="img" />
                            <a href="#">Jessica Jessy</a>
                          </div>
                          <div className="user-rating">
                            <span>
                              <i className="fa fa-star" />
                              4.9
                            </span>
                            (76)
                          </div>
                        </div>
                        <div className="price-wrap">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <a href="#">Development</a>
                            </div>
                            <div className="col-6 text-end">
                              <div className="price">$30</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-course-wrap">
                      <div className="thumb">
                        <a href="#" className="cat cat-blue">
                          Beginner
                        </a>
                        <img src="/assets/img/course/2.png" alt="img" />
                      </div>
                      <div className="wrap-details">
                        <h6>
                          <a href="#">
                            Search Engine Optimization Tips and Tricks
                          </a>
                        </h6>
                        <div className="user-area">
                          <div className="user-details">
                            <img src="/assets/img/author/1.png" alt="img" />
                            <a href="#">Jessica Jessy</a>
                          </div>
                          <div className="user-rating">
                            <span>
                              <i className="fa fa-star" />
                              4.9
                            </span>
                            (76)
                          </div>
                        </div>
                        <div className="price-wrap">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <a href="#">Development</a>
                            </div>
                            <div className="col-6 text-end">
                              <div className="price">$30</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="single-course-wrap">
                      <div className="thumb">
                        <a href="#" className="cat cat-blue">
                          Beginner
                        </a>
                        <img src="/assets/img/course/4.png" alt="img" />
                      </div>
                      <div className="wrap-details">
                        <h6>
                          <a href="#">
                            Email &amp; Affiliate Marketing Mastermind
                          </a>
                        </h6>
                        <div className="user-area">
                          <div className="user-details">
                            <img src="/assets/img/author/1.png" alt="img" />
                            <a href="#">Jessica Jessy</a>
                          </div>
                          <div className="user-rating">
                            <span>
                              <i className="fa fa-star" />
                              4.9
                            </span>
                            (76)
                          </div>
                        </div>
                        <div className="price-wrap">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <a href="#">Development</a>
                            </div>
                            <div className="col-6 text-end">
                              <div className="price">$30</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-course-wrap">
                      <div className="thumb">
                        <a href="#" className="cat cat-blue">
                          Beginner
                        </a>
                        <img src="/assets/img/course/7.png" alt="img" />
                      </div>
                      <div className="wrap-details">
                        <h6>
                          <a href="#">
                            Python Programming Tutorials (Computer Science)
                          </a>
                        </h6>
                        <div className="user-area">
                          <div className="user-details">
                            <img src="/assets/img/author/1.png" alt="img" />
                            <a href="#">Jessica Jessy</a>
                          </div>
                          <div className="user-rating">
                            <span>
                              <i className="fa fa-star" />
                              4.9
                            </span>
                            (76)
                          </div>
                        </div>
                        <div className="price-wrap">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <a href="#">Development</a>
                            </div>
                            <div className="col-6 text-end">
                              <div className="price">$30</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-10">
                <div className="course-slider owl-carousel">
                  <div className="item">
                    <div className="single-course-wrap">
                      <div className="thumb">
                        <a href="#" className="cat cat-blue">
                          Beginner
                        </a>
                        <img src="/assets/img/course/2.png" alt="img" />
                      </div>
                      <div className="wrap-details">
                        <h6>
                          <a href="#">
                            PHP for Beginners - Become a PHP Master - CMS
                            Project
                          </a>
                        </h6>
                        <div className="user-area">
                          <div className="user-details">
                            <img src="/assets/img/author/1.png" alt="img" />
                            <a href="#">Jessica Jessy</a>
                          </div>
                          <div className="user-rating">
                            <span>
                              <i className="fa fa-star" />
                              4.9
                            </span>
                            (76)
                          </div>
                        </div>
                        <div className="price-wrap">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <a href="#">Development</a>
                            </div>
                            <div className="col-6 text-end">
                              <div className="price">$30</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-course-wrap">
                      <div className="thumb">
                        <a href="#" className="cat cat-blue">
                          Beginner
                        </a>
                        <img src="/assets/img/course/6.png" alt="img" />
                      </div>
                      <div className="wrap-details">
                        <h6>
                          <a href="#">Java (Beginner) Programming Tutorials</a>
                        </h6>
                        <div className="user-area">
                          <div className="user-details">
                            <img src="/assets/img/author/1.png" alt="img" />
                            <a href="#">Jessica Jessy</a>
                          </div>
                          <div className="user-rating">
                            <span>
                              <i className="fa fa-star" />
                              4.9
                            </span>
                            (76)
                          </div>
                        </div>
                        <div className="price-wrap">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <a href="#">Development</a>
                            </div>
                            <div className="col-6 text-end">
                              <div className="price">$30</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="single-course-wrap">
                      <div className="thumb">
                        <a href="#" className="cat cat-red">
                          Expert
                        </a>
                        <img src="/assets/img/course/3.png" alt="img" />
                      </div>
                      <div className="wrap-details">
                        <h6>
                          <a href="#">Best way learn fundamentals of design.</a>
                        </h6>
                        <div className="user-area">
                          <div className="user-details">
                            <img src="/assets/img/author/1.png" alt="img" />
                            <a href="#">Jessica Jessy</a>
                          </div>
                          <div className="user-rating">
                            <span>
                              <i className="fa fa-star" />
                              4.9
                            </span>
                            (76)
                          </div>
                        </div>
                        <div className="price-wrap">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <a href="#">Development</a>
                            </div>
                            <div className="col-6 text-end">
                              <div className="price">$30</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-course-wrap">
                      <div className="thumb">
                        <a href="#" className="cat cat-blue">
                          Beginner
                        </a>
                        <img src="/assets/img/course/7.png" alt="img" />
                      </div>
                      <div className="wrap-details">
                        <h6>
                          <a href="#">
                            Time Management Mastery: Do More, Stress Less
                          </a>
                        </h6>
                        <div className="user-area">
                          <div className="user-details">
                            <img src="/assets/img/author/1.png" alt="img" />
                            <a href="#">Jessica Jessy</a>
                          </div>
                          <div className="user-rating">
                            <span>
                              <i className="fa fa-star" />
                              4.9
                            </span>
                            (76)
                          </div>
                        </div>
                        <div className="price-wrap">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <a href="#">Development</a>
                            </div>
                            <div className="col-6 text-end">
                              <div className="price">$30</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="single-course-wrap">
                      <div className="thumb">
                        <a href="#" className="cat cat-green">
                          All Level
                        </a>
                        <img src="/assets/img/course/4.png" alt="img" />
                      </div>
                      <div className="wrap-details">
                        <h6>
                          <a href="#">
                            About latest tips news and course for Illustration
                            2021
                          </a>
                        </h6>
                        <div className="user-area">
                          <div className="user-details">
                            <img src="/assets/img/author/1.png" alt="img" />
                            <a href="#">Jessica Jessy</a>
                          </div>
                          <div className="user-rating">
                            <span>
                              <i className="fa fa-star" />
                              4.9
                            </span>
                            (76)
                          </div>
                        </div>
                        <div className="price-wrap">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <a href="#">Development</a>
                            </div>
                            <div className="col-6 text-end">
                              <div className="price">$30</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-course-wrap">
                      <div className="thumb">
                        <a href="#" className="cat cat-blue">
                          Beginner
                        </a>
                        <img src="/assets/img/course/3.png" alt="img" />
                      </div>
                      <div className="wrap-details">
                        <h6>
                          <a href="#">
                            Search Engine Optimization Tips and Tricks
                          </a>
                        </h6>
                        <div className="user-area">
                          <div className="user-details">
                            <img src="/assets/img/author/1.png" alt="img" />
                            <a href="#">Jessica Jessy</a>
                          </div>
                          <div className="user-rating">
                            <span>
                              <i className="fa fa-star" />
                              4.9
                            </span>
                            (76)
                          </div>
                        </div>
                        <div className="price-wrap">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <a href="#">Development</a>
                            </div>
                            <div className="col-6 text-end">
                              <div className="price">$30</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="single-course-wrap">
                      <div className="thumb">
                        <a href="#" className="cat cat-blue">
                          Beginner
                        </a>
                        <img src="/assets/img/course/5.png" alt="img" />
                      </div>
                      <div className="wrap-details">
                        <h6>
                          <a href="#">
                            Email &amp; Affiliate Marketing Mastermind
                          </a>
                        </h6>
                        <div className="user-area">
                          <div className="user-details">
                            <img src="/assets/img/author/1.png" alt="img" />
                            <a href="#">Jessica Jessy</a>
                          </div>
                          <div className="user-rating">
                            <span>
                              <i className="fa fa-star" />
                              4.9
                            </span>
                            (76)
                          </div>
                        </div>
                        <div className="price-wrap">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <a href="#">Development</a>
                            </div>
                            <div className="col-6 text-end">
                              <div className="price">$30</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-course-wrap">
                      <div className="thumb">
                        <a href="#" className="cat cat-blue">
                          Beginner
                        </a>
                        <img src="/assets/img/course/1.png" alt="img" />
                      </div>
                      <div className="wrap-details">
                        <h6>
                          <a href="#">
                            Python Programming Tutorials (Computer Science)
                          </a>
                        </h6>
                        <div className="user-area">
                          <div className="user-details">
                            <img src="/assets/img/author/1.png" alt="img" />
                            <a href="#">Jessica Jessy</a>
                          </div>
                          <div className="user-rating">
                            <span>
                              <i className="fa fa-star" />
                              4.9
                            </span>
                            (76)
                          </div>
                        </div>
                        <div className="price-wrap">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <a href="#">Development</a>
                            </div>
                            <div className="col-6 text-end">
                              <div className="price">$30</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-11">
                <div className="course-slider owl-carousel">
                  <div className="item">
                    <div className="single-course-wrap">
                      <div className="thumb">
                        <a href="#" className="cat cat-blue">
                          Beginner
                        </a>
                        <img src="/assets/img/course/1.png" alt="img" />
                      </div>
                      <div className="wrap-details">
                        <h6>
                          <a href="#">
                            PHP for Beginners - Become a PHP Master - CMS
                            Project
                          </a>
                        </h6>
                        <div className="user-area">
                          <div className="user-details">
                            <img src="/assets/img/author/1.png" alt="img" />
                            <a href="#">Jessica Jessy</a>
                          </div>
                          <div className="user-rating">
                            <span>
                              <i className="fa fa-star" />
                              4.9
                            </span>
                            (76)
                          </div>
                        </div>
                        <div className="price-wrap">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <a href="#">Development</a>
                            </div>
                            <div className="col-6 text-end">
                              <div className="price">$30</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-course-wrap">
                      <div className="thumb">
                        <a href="#" className="cat cat-blue">
                          Beginner
                        </a>
                        <img src="/assets/img/course/5.png" alt="img" />
                      </div>
                      <div className="wrap-details">
                        <h6>
                          <a href="#">Java (Beginner) Programming Tutorials</a>
                        </h6>
                        <div className="user-area">
                          <div className="user-details">
                            <img src="/assets/img/author/1.png" alt="img" />
                            <a href="#">Jessica Jessy</a>
                          </div>
                          <div className="user-rating">
                            <span>
                              <i className="fa fa-star" />
                              4.9
                            </span>
                            (76)
                          </div>
                        </div>
                        <div className="price-wrap">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <a href="#">Development</a>
                            </div>
                            <div className="col-6 text-end">
                              <div className="price">$30</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="single-course-wrap">
                      <div className="thumb">
                        <a href="#" className="cat cat-red">
                          Expert
                        </a>
                        <img src="/assets/img/course/2.png" alt="img" />
                      </div>
                      <div className="wrap-details">
                        <h6>
                          <a href="#">Best way learn fundamentals of design.</a>
                        </h6>
                        <div className="user-area">
                          <div className="user-details">
                            <img src="/assets/img/author/1.png" alt="img" />
                            <a href="#">Jessica Jessy</a>
                          </div>
                          <div className="user-rating">
                            <span>
                              <i className="fa fa-star" />
                              4.9
                            </span>
                            (76)
                          </div>
                        </div>
                        <div className="price-wrap">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <a href="#">Development</a>
                            </div>
                            <div className="col-6 text-end">
                              <div className="price">$30</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-course-wrap">
                      <div className="thumb">
                        <a href="#" className="cat cat-blue">
                          Beginner
                        </a>
                        <img src="/assets/img/course/6.png" alt="img" />
                      </div>
                      <div className="wrap-details">
                        <h6>
                          <a href="#">
                            Time Management Mastery: Do More, Stress Less
                          </a>
                        </h6>
                        <div className="user-area">
                          <div className="user-details">
                            <img src="/assets/img/author/1.png" alt="img" />
                            <a href="#">Jessica Jessy</a>
                          </div>
                          <div className="user-rating">
                            <span>
                              <i className="fa fa-star" />
                              4.9
                            </span>
                            (76)
                          </div>
                        </div>
                        <div className="price-wrap">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <a href="#">Development</a>
                            </div>
                            <div className="col-6 text-end">
                              <div className="price">$30</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="single-course-wrap">
                      <div className="thumb">
                        <a href="#" className="cat cat-green">
                          All Level
                        </a>
                        <img src="/assets/img/course/3.png" alt="img" />
                      </div>
                      <div className="wrap-details">
                        <h6>
                          <a href="#">
                            About latest tips news and course for Illustration
                            2021
                          </a>
                        </h6>
                        <div className="user-area">
                          <div className="user-details">
                            <img src="/assets/img/author/1.png" alt="img" />
                            <a href="#">Jessica Jessy</a>
                          </div>
                          <div className="user-rating">
                            <span>
                              <i className="fa fa-star" />
                              4.9
                            </span>
                            (76)
                          </div>
                        </div>
                        <div className="price-wrap">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <a href="#">Development</a>
                            </div>
                            <div className="col-6 text-end">
                              <div className="price">$30</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-course-wrap">
                      <div className="thumb">
                        <a href="#" className="cat cat-blue">
                          Beginner
                        </a>
                        <img src="/assets/img/course/2.png" alt="img" />
                      </div>
                      <div className="wrap-details">
                        <h6>
                          <a href="#">
                            Search Engine Optimization Tips and Tricks
                          </a>
                        </h6>
                        <div className="user-area">
                          <div className="user-details">
                            <img src="/assets/img/author/1.png" alt="img" />
                            <a href="#">Jessica Jessy</a>
                          </div>
                          <div className="user-rating">
                            <span>
                              <i className="fa fa-star" />
                              4.9
                            </span>
                            (76)
                          </div>
                        </div>
                        <div className="price-wrap">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <a href="#">Development</a>
                            </div>
                            <div className="col-6 text-end">
                              <div className="price">$30</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="single-course-wrap">
                      <div className="thumb">
                        <a href="#" className="cat cat-blue">
                          Beginner
                        </a>
                        <img src="/assets/img/course/4.png" alt="img" />
                      </div>
                      <div className="wrap-details">
                        <h6>
                          <a href="#">
                            Email &amp; Affiliate Marketing Mastermind
                          </a>
                        </h6>
                        <div className="user-area">
                          <div className="user-details">
                            <img src="/assets/img/author/1.png" alt="img" />
                            <a href="#">Jessica Jessy</a>
                          </div>
                          <div className="user-rating">
                            <span>
                              <i className="fa fa-star" />
                              4.9
                            </span>
                            (76)
                          </div>
                        </div>
                        <div className="price-wrap">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <a href="#">Development</a>
                            </div>
                            <div className="col-6 text-end">
                              <div className="price">$30</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-course-wrap">
                      <div className="thumb">
                        <a href="#" className="cat cat-blue">
                          Beginner
                        </a>
                        <img src="/assets/img/course/7.png" alt="img" />
                      </div>
                      <div className="wrap-details">
                        <h6>
                          <a href="#">
                            Python Programming Tutorials (Computer Science)
                          </a>
                        </h6>
                        <div className="user-area">
                          <div className="user-details">
                            <img src="/assets/img/author/1.png" alt="img" />
                            <a href="#">Jessica Jessy</a>
                          </div>
                          <div className="user-rating">
                            <span>
                              <i className="fa fa-star" />
                              4.9
                            </span>
                            (76)
                          </div>
                        </div>
                        <div className="price-wrap">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <a href="#">Development</a>
                            </div>
                            <div className="col-6 text-end">
                              <div className="price">$30</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-12">
                <div className="course-slider owl-carousel">
                  <div className="item">
                    <div className="single-course-wrap">
                      <div className="thumb">
                        <a href="#" className="cat cat-blue">
                          Beginner
                        </a>
                        <img src="/assets/img/course/2.png" alt="img" />
                      </div>
                      <div className="wrap-details">
                        <h6>
                          <a href="#">
                            PHP for Beginners - Become a PHP Master - CMS
                            Project
                          </a>
                        </h6>
                        <div className="user-area">
                          <div className="user-details">
                            <img src="/assets/img/author/1.png" alt="img" />
                            <a href="#">Jessica Jessy</a>
                          </div>
                          <div className="user-rating">
                            <span>
                              <i className="fa fa-star" />
                              4.9
                            </span>
                            (76)
                          </div>
                        </div>
                        <div className="price-wrap">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <a href="#">Development</a>
                            </div>
                            <div className="col-6 text-end">
                              <div className="price">$30</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-course-wrap">
                      <div className="thumb">
                        <a href="#" className="cat cat-blue">
                          Beginner
                        </a>
                        <img src="/assets/img/course/6.png" alt="img" />
                      </div>
                      <div className="wrap-details">
                        <h6>
                          <a href="#">Java (Beginner) Programming Tutorials</a>
                        </h6>
                        <div className="user-area">
                          <div className="user-details">
                            <img src="/assets/img/author/1.png" alt="img" />
                            <a href="#">Jessica Jessy</a>
                          </div>
                          <div className="user-rating">
                            <span>
                              <i className="fa fa-star" />
                              4.9
                            </span>
                            (76)
                          </div>
                        </div>
                        <div className="price-wrap">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <a href="#">Development</a>
                            </div>
                            <div className="col-6 text-end">
                              <div className="price">$30</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="single-course-wrap">
                      <div className="thumb">
                        <a href="#" className="cat cat-red">
                          Expert
                        </a>
                        <img src="/assets/img/course/3.png" alt="img" />
                      </div>
                      <div className="wrap-details">
                        <h6>
                          <a href="#">Best way learn fundamentals of design.</a>
                        </h6>
                        <div className="user-area">
                          <div className="user-details">
                            <img src="/assets/img/author/1.png" alt="img" />
                            <a href="#">Jessica Jessy</a>
                          </div>
                          <div className="user-rating">
                            <span>
                              <i className="fa fa-star" />
                              4.9
                            </span>
                            (76)
                          </div>
                        </div>
                        <div className="price-wrap">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <a href="#">Development</a>
                            </div>
                            <div className="col-6 text-end">
                              <div className="price">$30</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-course-wrap">
                      <div className="thumb">
                        <a href="#" className="cat cat-blue">
                          Beginner
                        </a>
                        <img src="/assets/img/course/7.png" alt="img" />
                      </div>
                      <div className="wrap-details">
                        <h6>
                          <a href="#">
                            Time Management Mastery: Do More, Stress Less
                          </a>
                        </h6>
                        <div className="user-area">
                          <div className="user-details">
                            <img src="/assets/img/author/1.png" alt="img" />
                            <a href="#">Jessica Jessy</a>
                          </div>
                          <div className="user-rating">
                            <span>
                              <i className="fa fa-star" />
                              4.9
                            </span>
                            (76)
                          </div>
                        </div>
                        <div className="price-wrap">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <a href="#">Development</a>
                            </div>
                            <div className="col-6 text-end">
                              <div className="price">$30</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="single-course-wrap">
                      <div className="thumb">
                        <a href="#" className="cat cat-green">
                          All Level
                        </a>
                        <img src="/assets/img/course/4.png" alt="img" />
                      </div>
                      <div className="wrap-details">
                        <h6>
                          <a href="#">
                            About latest tips news and course for Illustration
                            2021
                          </a>
                        </h6>
                        <div className="user-area">
                          <div className="user-details">
                            <img src="/assets/img/author/1.png" alt="img" />
                            <a href="#">Jessica Jessy</a>
                          </div>
                          <div className="user-rating">
                            <span>
                              <i className="fa fa-star" />
                              4.9
                            </span>
                            (76)
                          </div>
                        </div>
                        <div className="price-wrap">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <a href="#">Development</a>
                            </div>
                            <div className="col-6 text-end">
                              <div className="price">$30</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-course-wrap">
                      <div className="thumb">
                        <a href="#" className="cat cat-blue">
                          Beginner
                        </a>
                        <img src="/assets/img/course/3.png" alt="img" />
                      </div>
                      <div className="wrap-details">
                        <h6>
                          <a href="#">
                            Search Engine Optimization Tips and Tricks
                          </a>
                        </h6>
                        <div className="user-area">
                          <div className="user-details">
                            <img src="/assets/img/author/1.png" alt="img" />
                            <a href="#">Jessica Jessy</a>
                          </div>
                          <div className="user-rating">
                            <span>
                              <i className="fa fa-star" />
                              4.9
                            </span>
                            (76)
                          </div>
                        </div>
                        <div className="price-wrap">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <a href="#">Development</a>
                            </div>
                            <div className="col-6 text-end">
                              <div className="price">$30</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="single-course-wrap">
                      <div className="thumb">
                        <a href="#" className="cat cat-blue">
                          Beginner
                        </a>
                        <img src="/assets/img/course/5.png" alt="img" />
                      </div>
                      <div className="wrap-details">
                        <h6>
                          <a href="#">
                            Email &amp; Affiliate Marketing Mastermind
                          </a>
                        </h6>
                        <div className="user-area">
                          <div className="user-details">
                            <img src="/assets/img/author/1.png" alt="img" />
                            <a href="#">Jessica Jessy</a>
                          </div>
                          <div className="user-rating">
                            <span>
                              <i className="fa fa-star" />
                              4.9
                            </span>
                            (76)
                          </div>
                        </div>
                        <div className="price-wrap">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <a href="#">Development</a>
                            </div>
                            <div className="col-6 text-end">
                              <div className="price">$30</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-course-wrap">
                      <div className="thumb">
                        <a href="#" className="cat cat-blue">
                          Beginner
                        </a>
                        <img src="/assets/img/course/1.png" alt="img" />
                      </div>
                      <div className="wrap-details">
                        <h6>
                          <a href="#">
                            Python Programming Tutorials (Computer Science)
                          </a>
                        </h6>
                        <div className="user-area">
                          <div className="user-details">
                            <img src="/assets/img/author/1.png" alt="img" />
                            <a href="#">Jessica Jessy</a>
                          </div>
                          <div className="user-rating">
                            <span>
                              <i className="fa fa-star" />
                              4.9
                            </span>
                            (76)
                          </div>
                        </div>
                        <div className="price-wrap">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <a href="#">Development</a>
                            </div>
                            <div className="col-6 text-end">
                              <div className="price">$30</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MostEnrolledCourses;
