import React from 'react';
import Breabcumb from '../../components/Breabcumb';
import Course from '../../components/Course';

const index = () => {
  return (
    <>
      <Breabcumb path="Course" title="All Courses" />
      <Course courses={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}></Course>
    </>
  );
};

export default index;
