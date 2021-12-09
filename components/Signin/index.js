import Link from 'next/link';
import React from 'react';

const index = () => {
  return (
    <div className="signin-area pd-top-130 pd-bottom-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-5">
            <form className="single-signin-form-wrap">
              <div className="single-input-wrap">
                <input type="email" placeholder="Email Address" />
              </div>
              <div className="single-input-wrap">
                <input type="password" placeholder="Password" />
              </div>
              <div className="btn-wrap">
                <button className="btn btn-base w-100">Signin Now</button>
              </div>
              <div className="bottom-content">
                <a href="#">Forgottem Your Password? </a>
                <Link href="/signup">
                  <a className="strong">Signup</a>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
