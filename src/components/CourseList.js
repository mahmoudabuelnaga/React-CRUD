import React, {Component} from "react";

class CourseList extends Component{

    state = {
        togol: false
    }

    
    togolChange = () => {
        let togol = this.state.togol;
        this.setState({
            togol: !togol
        })
    }

    
    course = () => {
        return(
            <li>
                <span>{this.props.course.name}</span>
                <button onClick={() => {this.togolChange()}}>Update</button>
                <button onClick={() => this.props.DeleteItem(this.props.index)}>&times; Delete Course</button>
            </li>
        )
    }

    updateCourseItem = (e) => {
        e.preventDefault();
        this.props.editCourse(this.props.index, this.input.value);
        this.togolChange();
    }

    editCourse = () => {
        return(
            <form onSubmit={this.updateCourseItem}>
                <input defaultValue={this.props.course.name} ref={(v) => {this.input = v}} type='text'/>
                <button>Save Update</button>
            </form>
        )
    }

    render(){
        // console.log(this.state.togol)
        return(
            <>
                {this.state.togol? this.editCourse() : this.course()}
                {/* {this.state.togol ? this.all_courses.editCourse : this.all_courses.Course} */}
            </>
        )
    }
}

export default CourseList;