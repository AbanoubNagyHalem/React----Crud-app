import React from "react";

const CourseForm = (props) => {
  return (
    <form onSubmit={props.AddCourse}>
      <input onChange={props.UpdateCourse} type="text" />
      <button type="submit">Add Course</button>
    </form>
  );
};

export default CourseForm;
