import React from 'react';

const TrendingCourses = () => {
  return (
    <section className="trending-courses-area pd-top-135 pd-bottom-140">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>Most Trending Courses</h2>
            </div>
          </div>
          <div className="col-lg-12">
            <ul className="edl-nav nav nav-pills">
              <li className="nav-item">
                <button
                  className="nav-link active"
                  id="pills-1-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-1"
                >
                  All Course
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  id="pills-2-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-2"
                >
                  Python
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  id="pills-3-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-3"
                >
                  UI Design
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  id="pills-4-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-4"
                >
                  Php
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  id="pills-5-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-5"
                >
                  HTML
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  id="pills-6-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-6"
                >
                  CSS
                </button>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane fade show active" id="pills-1">
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
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-2">
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
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-3">
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
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-4">
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
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-5">
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
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-6">
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

export default TrendingCourses;
