import React, {Component, Fragment} from 'react';

class CourseList extends Component {
    state = {
        isEdit: false
    }
    renderCourse = () => {
        return (
            <li>
                    <span>{this.props.details.name}</span>
                    <button onClick={() => {this.editCourse()}}>Edit Course</button>
                    <button onClick={() => {this.props.deleteCourse(this.props.index)}}>Delete Course</button>
            </li>
        )
    }


    // toggle Edit
    editCourse = () => {
        let {isEdit} = this.state;
        this.setState({
            isEdit: !isEdit
        })
    }

    // Handle Submit
    handleSubmit = (e) => {
        e.preventDefault();
        if(this.input.value !== '') {
            this.props.updateCourse(this.props.index, this.input.value);
            this.editCourse();
        } else {
            return false;
        }
    }

    // Render Update Form
    renderUpdateForm = () => {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" ref={(v) => {this.input = v}} defaultValue={this.props.details.name} />
                <button>Update Course</button>
            </form>
        )
    }

    render() {
        let {isEdit} = this.state;
        return(
            <Fragment>
                {isEdit ? this.renderUpdateForm() : this.renderCourse()}
            </Fragment>
        );
    }
}


export default CourseList;