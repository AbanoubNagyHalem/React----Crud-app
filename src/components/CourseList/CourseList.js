import React, { Component } from "react";
import {} from "react/cjs/react.production.min";

class CourseList extends Component {
  state = {
    isEdit: false,
  };

  toggleState = () => {
    let { isEdit } = this.state;
    this.setState({ isEdit: !isEdit });
  };

  RenderCourse = () => {
    return (
      <li>
        <span>{this.props.details.name}</span>
        <button
          onClick={() => {
            this.toggleState();
          }}
        >
          Edit Course
        </button>
        <button onClick={() => this.props.DeleteCourse(this.props.index)}>
          Delete Course
        </button>
      </li>
    );
  };

  updateCourseItem = (e) => {
    e.preventDefault();
    this.props.EditCourse(this.props.index, this.input.value);
    this.toggleState();
  };

  renderUpdateForm = () => {
    return (
      <form onSubmit={this.updateCourseItem}>
        <input
          type="text"
          defaultValue={this.props.details.name}
          ref={(v) => {
            this.input = v;
          }}
        />
        <button>Update Course</button>
      </form>
    );
  };

  render() {
    return (
      <React.Fragment>
        {this.state.isEdit ? this.renderUpdateForm() : this.RenderCourse()}
      </React.Fragment>
    );
  }
}

export default CourseList;
