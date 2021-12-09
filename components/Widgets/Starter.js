import React from 'react';

const Starter = () => {
  return (
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
                <a className="btn btn-base-light-border" href="facebook.com">
                  Resignation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Starter;
