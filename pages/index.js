export default function Home() {
  return (
    <div>
      <div>
        {/* Banner Area Start*/}
        <section
          className="banner-area"
          style={{ backgroundImage: 'url(/assets/img/banner/0.jpg)' }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-8 align-self-center">
                <div className="banner-inner text-md-start text-center">
                  <h1>
                    Find the Best <span>Courses</span> &amp; Upgrade{' '}
                    <span>Your Skills.</span>
                  </h1>
                  <div className="banner-content">
                    <p>
                      Edufie offers professional training classes and special
                      features to help you improve your skills.
                    </p>
                  </div>
                  <div className="single-input-wrap">
                    <input type="text" placeholder="Search your best courses" />
                    <button>
                      <i className="fa fa-search" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Banner Area End */}
        {/* intro Area Start*/}
        <div className="container">
          <div className="intro-area">
            <div className="row justify-content-center">
              <div className="col-lg-3 col-sm-6">
                <div className="single-intro-wrap">
                  <div className="thumb">
                    <img src="/assets/img/intro/1.png" alt="img" />
                  </div>
                  <div className="wrap-details">
                    <h6>
                      <a href="#">130,000 online courses</a>
                    </h6>
                    <p>Enjoy a variety of fresh topics</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-intro-wrap">
                  <div className="thumb">
                    <img src="/assets/img/intro/2.png" alt="img" />
                  </div>
                  <div className="wrap-details">
                    <h6>
                      <a href="#">Expert instruction</a>
                    </h6>
                    <p>Enjoy a variety of fresh topics</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-intro-wrap">
                  <div className="thumb">
                    <img src="/assets/img/intro/3.png" alt="img" />
                  </div>
                  <div className="wrap-details">
                    <h6>
                      <a href="#">Lifetime access</a>
                    </h6>
                    <p>Learn on your schedule</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-intro-wrap">
                  <div className="thumb">
                    <img src="/assets/img/intro/1.png" alt="img" />
                  </div>
                  <div className="wrap-details">
                    <h6>
                      <a href="#">130,000 online courses</a>
                    </h6>
                    <p>Enjoy a variety of fresh topics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* intro Area End */}
        {/* trending courses Area Start*/}
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
                              <a href="#">
                                Best way learn fundamentals of design.
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
                                About latest tips news and course for
                                Illustration 2021
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
                              <a href="#">
                                Best way learn fundamentals of design.
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
                                About latest tips news and course for
                                Illustration 2021
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
                              <a href="#">
                                Best way learn fundamentals of design.
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
                                About latest tips news and course for
                                Illustration 2021
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
                              <a href="#">
                                Best way learn fundamentals of design.
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
                                About latest tips news and course for
                                Illustration 2021
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
                              <a href="#">
                                Best way learn fundamentals of design.
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
                                About latest tips news and course for
                                Illustration 2021
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
                              <a href="#">
                                Best way learn fundamentals of design.
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
                                About latest tips news and course for
                                Illustration 2021
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
        {/* trending courses Area End */}
        {/* service Area Start*/}
        <section className="service-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="section-title">
                  <h2>Find the right course</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque in eget phasellus dui tincidunt nascetur nisl
                    nunc consequat. Arcu ultricies pulvinar enim vulputate.
                  </p>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="category-service">
                  <div className="item">
                    <div className="single-service-wrap">
                      <h6>Digital Marketing</h6>
                      <p>236 Course Available</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="single-service-wrap">
                      <h6>Web Development</h6>
                      <p>236 Course Available</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="single-service-wrap">
                      <h6>Photography</h6>
                      <p>236 Course Available</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="single-service-wrap">
                      <h6>Drawing</h6>
                      <p>236 Course Available</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="single-service-wrap">
                      <h6>UX Design</h6>
                      <p>236 Course Available</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="single-service-wrap">
                      <h6>JavaScript</h6>
                      <p>236 Course Available</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="single-service-wrap">
                      <h6>Graphics Design</h6>
                      <p>236 Course Available</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="single-service-wrap">
                      <h6>Web Marketing</h6>
                      <p>236 Course Available</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="single-service-wrap">
                      <h6>Digital Marketing</h6>
                      <p>236 Course Available</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="single-service-wrap">
                      <h6>UX Design</h6>
                      <p>236 Course Available</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="single-service-wrap">
                      <h6>JavaScript</h6>
                      <p>236 Course Available</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="single-service-wrap">
                      <h6>Graphics Design</h6>
                      <p>236 Course Available</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="single-service-wrap">
                      <h6>Digital Marketing</h6>
                      <p>236 Course Available</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="single-service-wrap">
                      <h6>JavaScript</h6>
                      <p>236 Course Available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* service Area End */}
        {/* enllor courses Area Start*/}
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
                              <a href="#">
                                Java (Beginner) Programming Tutorials
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
                              <a href="#">
                                Best way learn fundamentals of design.
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
                                About latest tips news and course for
                                Illustration 2021
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
                              <a href="#">
                                Java (Beginner) Programming Tutorials
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
                            <img src="/assets/img/course/3.png" alt="img" />
                          </div>
                          <div className="wrap-details">
                            <h6>
                              <a href="#">
                                Best way learn fundamentals of design.
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
                                About latest tips news and course for
                                Illustration 2021
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
                              <a href="#">
                                Java (Beginner) Programming Tutorials
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
                              <a href="#">
                                Best way learn fundamentals of design.
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
                                About latest tips news and course for
                                Illustration 2021
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
                              <a href="#">
                                Java (Beginner) Programming Tutorials
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
                            <img src="/assets/img/course/3.png" alt="img" />
                          </div>
                          <div className="wrap-details">
                            <h6>
                              <a href="#">
                                Best way learn fundamentals of design.
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
                                About latest tips news and course for
                                Illustration 2021
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
                              <a href="#">
                                Java (Beginner) Programming Tutorials
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
                              <a href="#">
                                Best way learn fundamentals of design.
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
                                About latest tips news and course for
                                Illustration 2021
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
                              <a href="#">
                                Java (Beginner) Programming Tutorials
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
                            <img src="/assets/img/course/3.png" alt="img" />
                          </div>
                          <div className="wrap-details">
                            <h6>
                              <a href="#">
                                Best way learn fundamentals of design.
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
                                About latest tips news and course for
                                Illustration 2021
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
        {/* enllor courses Area End */}
        {/* testimonial courses Area Start*/}
        <section className="testimonial-courses-area pd-bottom-150">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>
                    People{' '}
                    <i
                      style={{ color: 'var(--main-color)' }}
                      className="fa fa-heart"
                    />{' '}
                    Edufie
                  </h2>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testimonial-slider owl-carousel">
                  <div className="item">
                    <div className="single-testimonial-wrap">
                      <div className="thumb">
                        <img src="/assets/img/quote.png" alt="img" />
                      </div>
                      <div className="wrap-details">
                        <h5>
                          <a href="#">Super fast WordPress themes</a>
                        </h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Velit placerat sit feugiat ornare tortor arcu,
                          euismod pellentesque porta. Lacus, semper congue
                          consequat, potenti suspendisse luctus cras vel.
                        </p>
                        <span>- Jessica Jessy</span>
                        <a className="play-btn" href="#">
                          <i className="fa fa-play" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="single-testimonial-wrap">
                      <div className="thumb">
                        <img src="/assets/img/quote.png" alt="img" />
                      </div>
                      <div className="wrap-details">
                        <h5>
                          <a href="#">Super fast WordPress themes</a>
                        </h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Velit placerat sit feugiat ornare tortor arcu,
                          euismod pellentesque porta. Lacus, semper congue
                          consequat, potenti suspendisse luctus cras vel.
                        </p>
                        <span>- Jessica Jessy</span>
                        <a className="play-btn" href="#">
                          <i className="fa fa-play" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="single-testimonial-wrap">
                      <div className="thumb">
                        <img src="/assets/img/quote.png" alt="img" />
                      </div>
                      <div className="wrap-details">
                        <h5>
                          <a href="#">Super fast WordPress themes</a>
                        </h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Velit placerat sit feugiat ornare tortor arcu,
                          euismod pellentesque porta. Lacus, semper congue
                          consequat, potenti suspendisse luctus cras vel.
                        </p>
                        <span>- Jessica Jessy</span>
                        <a className="play-btn" href="#">
                          <i className="fa fa-play" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="single-testimonial-wrap">
                      <div className="thumb">
                        <img src="/assets/img/quote.png" alt="img" />
                      </div>
                      <div className="wrap-details">
                        <h5>
                          <a href="#">Super fast WordPress themes</a>
                        </h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Velit placerat sit feugiat ornare tortor arcu,
                          euismod pellentesque porta. Lacus, semper congue
                          consequat, potenti suspendisse luctus cras vel.
                        </p>
                        <span>- Jessica Jessy</span>
                        <a className="play-btn" href="#">
                          <i className="fa fa-play" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* testimonial courses Area End */}
        {/* client Area Start*/}
        <section className="client-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="client-slider owl-carousel">
                  <div className="item">
                    <img src="/assets/img/client/1.png" alt="img" />
                  </div>
                  <div className="item">
                    <img src="/assets/img/client/2.png" alt="img" />
                  </div>
                  <div className="item">
                    <img src="/assets/img/client/3.png" alt="img" />
                  </div>
                  <div className="item">
                    <img src="/assets/img/client/4.png" alt="img" />
                  </div>
                  <div className="item">
                    <img src="/assets/img/client/5.png" alt="img" />
                  </div>
                  <div className="item">
                    <img src="/assets/img/client/6.png" alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* client Area End */}
        {/* about Area Start*/}
        <section className="about-area pd-top-150 pd-bottom-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="single-about-wrap">
                  <div className="thumb">
                    <img src="/assets/img/intro/video-player.png" alt="img" />
                  </div>
                  <div className="wrap-details">
                    <h3>
                      <a href="#">Become a trainer</a>
                    </h3>
                    <p>
                      Our courses are built with keeping all levels of users in
                      mind. Learn from industry experts and open up a whole new
                      series of possibilities.
                    </p>
                    <a className="btn btn-base-light-border" href="google.com">
                      Resignation
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="single-about-wrap">
                  <div className="thumb">
                    <img src="/assets/img/intro/brain.png" alt="img" />
                  </div>
                  <div className="wrap-details">
                    <h3>
                      <a href="#">Become a Student</a>
                    </h3>
                    <p>
                      Our courses are built with keeping all levels of users in
                      mind. Learn from industry experts and open up a whole new
                      series of possibilities.
                    </p>
                    <a
                      className="btn btn-base-light-border"
                      href="facebook.com"
                    >
                      Resignation
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* about Area End */}
      </div>
    </div>
  );
}
