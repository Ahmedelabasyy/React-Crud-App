import React from 'react';

const CourseForm = (props) => {
    return(
        <form onSubmit={props.addCourse}>
            <input type="text" placeholder="Course Name" value={props.currentValue} onChange={props.newCourse}/>
            <button>Add Course</button>
        </form>
    );
}

export default CourseForm;