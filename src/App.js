import React, { Component } from 'react';
import CourseForm from './components/courseForm';
import CourseList from './components/courseList';

class App extends Component {
  state = {
    courses: [
      {name: "HTML"},
      {name: "CSS"},
      {name: "SASS"}
    ],
    current: ''
  }

  // The New Course
  newCourse = (e) => {
    this.setState({
      current: e.target.value
    })
  }

  // Add Course
  addCourse = (e) => {
    e.preventDefault();
    let current = this.state.current;
    let courses = this.state.courses;
    if(current) {
      courses.push({name: current});
      this.setState({
        courses,
        current: ''
      });
    } else {
      return false;
    }
  }

  // Delete Course
  deleteCourse = (index) => {
    let {courses} = this.state;
    courses.splice(index, 1);
    this.setState({
      courses
    })
  }

  // Update Course
  updateCourse = (index, value) => {
    let {courses} = this.state;
    let course = courses[index];
    course["name"] = value;
    this.setState({
      courses
    })
  }

  render() {
    const {courses} = this.state;
    let courseList = courses.map( (course, index) => {
      return <CourseList details={course} key={index} index={index} deleteCourse={this.deleteCourse} updateCourse={this.updateCourse}/>
    } )
    return(
      <section className="App">
        <h1>Add Courses</h1>
        <CourseForm currentValue={this.state.current} newCourse={this.newCourse} addCourse={this.addCourse} />
        <ul>{this.state.courses.length > 0 ? courseList : <p className="text-center">There Is No Course To Show</p>}</ul>
      </section>
    );
  }
}

export default App;
