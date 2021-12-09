import React from 'react';
import CourseCard from '../CourseCard';
import Pagination from '../Pagination';

const index = ({ courses }) => {
  return (
    <section className="trending-courses-area pd-top-135 pd-bottom-130">
      <div className="container">
        <div className="row">
          {courses.map(course => (
            <div key={course} className="col-lg-3 col-md-4">
              <CourseCard />
            </div>
          ))}
          {/* pagination */}
          <Pagination></Pagination>
        </div>
      </div>
    </section>
  );
};

export default index;
