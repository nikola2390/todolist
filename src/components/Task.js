import React from 'react';

function Task(props) {
    return (
        <div className = 'todo-item'>
            <input type = "checkbox" checked = {props.task.done} onChange={() => props.handleChange(props.task.id)}></input>
            <p>{ props.task.title }</p>
        </div>
    )
}

export default Task;