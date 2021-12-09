import React from 'react';

const ClientCarousel = () => {
  return (
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
  );
};

export default ClientCarousel;
