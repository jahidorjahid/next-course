import React from 'react';

const index = () => {
  return (
    <div className="signin-area pd-top-130 pd-bottom-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-5">
            <form className="single-signin-form-wrap">
              <div className="single-input-wrap">
                <input
                  type="text"
                  placeholder="First Name"
                  //   style={{
                  //     backgroundImage: 'url("data:image/png',
                  //     backgroundRepeat: 'no-repeat',
                  //     backgroundAttachment: 'scroll',
                  //     backgroundSize: '16px 18px',
                  //     backgroundPosition: '98% 50%',
                  //   }}
                />
              </div>
              <div className="single-input-wrap">
                <input type="text" placeholder="Last Name" />
              </div>
              <div className="single-input-wrap">
                <input
                  type="password"
                  placeholder="Password"
                  //   style={{
                  //     backgroundImage: 'url("data:image/png',
                  //     backgroundRepeat: 'no-repeat',
                  //     backgroundAttachment: 'scroll',
                  //     backgroundSize: '16px 18px',
                  //     backgroundPosition: '98% 50%',
                  //   }}
                />
              </div>
              <div className="single-input-wrap">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  //   style={{
                  //     backgroundImage: 'url("data:image/png',
                  //     backgroundRepeat: 'no-repeat',
                  //     backgroundAttachment: 'scroll',
                  //     backgroundSize: '16px 18px',
                  //     backgroundPosition: '98% 50%',
                  //   }}
                />
              </div>
              <div className="single-checkbox-inner">
                <input type="checkbox" />
                By clicking {'create account'}.
              </div>
              <div className="btn-wrap">
                <button className="btn btn-base w-100">SignUp Now</button>
              </div>
              <div className="bottom-content">
                <a href="#">Forgottem Your Password</a>
                <a className="strong" href="signin.html">
                  Signin
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
