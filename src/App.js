import React, { useState } from "react";
import CourseForm from "./components/CourseForm/CourseForm";
import CourseList from "./components/CourseList/CourseList";
import "./index.css";

const App = () => {
  let courses = [
    { name: "HTML" },
    { name: "CSS" },
    { name: "JavaScript" },
    { name: "jQuery" },
  ];

  const [List, setList] = useState(courses);

  let current;

  const UpdateCourse = (e) => {
    current = e.target.value;
  };

  const AddCourse = (e) => {
    e.preventDefault();
    List.push({ name: current });
    setList(
      List.map((i) => {
        return i;
      })
    );
  };

  const DeleteCourse = (index) => {
    List.splice(index, 1);
    setList(
      List.map((i) => {
        return i;
      })
    );
  };

  const EditCourse = (index, value) => {
    let course = List[index];
    course["name"] = value;
    setList(
      List.map((i) => {
        return i;
      })
    );
  };

  const coutseList = List.map((course, index) => {
    return (
      <CourseList
        EditCourse={EditCourse}
        DeleteCourse={DeleteCourse}
        index={index}
        details={course}
        key={index}
        UpdateCourse={UpdateCourse}
      />
    );
  });

  return (
    <section className="App">
      <h2>Add Course</h2>
      <CourseForm UpdateCourse={UpdateCourse} AddCourse={AddCourse} />
      <ul>{coutseList}</ul>
    </section>
  );
};

export default App;
