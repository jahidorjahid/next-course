import {
  TrendingCourses,
  MostEnrolledCourses,
  Starter,
  ClientCarousel,
  Testimonials,
} from '../components/Widgets';

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
        <TrendingCourses></TrendingCourses>
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
        <MostEnrolledCourses></MostEnrolledCourses>
        {/* enllor courses Area End */}
        {/* testimonial courses Area Start*/}
        <Testimonials></Testimonials>
        {/* testimonial courses Area End */}
        {/* client Area Start*/}
        <ClientCarousel></ClientCarousel>
        {/* client Area End */}
        {/* about Area Start*/}
        <Starter></Starter>
        {/* about Area End */}
      </div>
    </div>
  );
}
