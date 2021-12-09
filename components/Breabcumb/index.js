import React from 'react';

const index = ({ title, path }) => {
  return (
    <section className="breadcrumb-area" style={{ backgroundColor: '#F9FAFD' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 align-self-center">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {path}
              </li>
            </ul>
            <h2>{title}</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
