import React from "react";

const CourseForm = (props) => {
    return(
        <div>
            <form onSubmit={props.handelSubmit}>
                <input value={props.current} id='name' type='text' placeholder='Nama...' onChange={props.handelChange}/>
                <button type='submit' >Add</button>
            </form>
        </div>
    )
}

export default CourseForm;