import React from 'react';

const course = {
  level: 'All Level',
  title: 'About latest tips news and course for Illustration 2021',
  author: 'Jessica Jessy',
  category: 'Development',
  price: 30,
  rating: {
    count: 34,
    rate: 3.5,
  },
};

const index = () => {
  return (
    <div className="single-course-wrap">
      <div className="thumb">
        <a href="#" className="cat cat-green">
          {course.level}
        </a>
        <img src="/assets/img/course/3.png" alt="img" />
      </div>
      <div className="wrap-details">
        <h6>
          <a href="#">{course.title}</a>
        </h6>
        <div className="user-area">
          <div className="user-details">
            <img src="/assets/img/author/1.png" alt="img" />
            <a href="#">{course.author}</a>
          </div>
          <div className="user-rating">
            <span>
              <i className="fa fa-star" />
              {course.rating.rate}
            </span>
            ({course.rating.count})
          </div>
        </div>
        <div className="price-wrap">
          <div className="row align-items-center">
            <div className="col-6">
              <a href="#">{course.category}</a>
            </div>
            <div className="col-6 text-end">
              <div className="price">${course.price}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
