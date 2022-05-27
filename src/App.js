import './App.css';
import React, { Component } from 'react';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';

class App extends Component {
  state = {
    current: '',
    courses : [
      {name: 'HTML'},
      {name: 'CSS'},
      {name: 'Python'},
      {name: 'JavaScript'},
    ], 
    
  }

  handelChange = (e) => {
    this.setState({
      current: e.target.value
    })
  }

  handelSubmit = (e) => {
    e.preventDefault();
    let courses = this.state.courses;
    if (this.state.current !== ''){
      courses.push({name: this.state.current});
      this.setState({
        current: '',
        courses: courses,
        
      })  
    }
  }

  DeleteItem = (index) => {
    let courses = this.state.courses;
    courses.splice(index, 1)
    this.setState({
      courses
    })
  }

  editCourse = (index, value) => {
    let courses = this.state.courses;
    let course = courses[index]
    course['name'] = value
    this.setState({
      courses
    })
  }

  render(){
    const all_courses = this.state.courses.length !== 0 ? (this.state.courses.map((course, index) => {
      return <CourseList editCourse={this.editCourse} DeleteItem={this.DeleteItem} key={index} course={course} index={index}/>
    })):(<li>There is no item here!</li>)
    return (
      <section className='App'>
        <h2>Add Course</h2>
        <CourseForm current={this.state.current} handelSubmit={this.handelSubmit} handelChange={this.handelChange}/>
        <ul>
          {all_courses}
        </ul>

      </section>
    );  
  }
}

export default App;
