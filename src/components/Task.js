import React from 'react';

function Task(props) {
    const classes = ['todo-item'];

    if (props.task.done) {
        classes.push('done');
    }

    return (
        <div className = {classes.join(' ')}>
            <input type = "checkbox" checked = {props.task.done} onChange={() => props.toggleDone(props.task.id)}></input>
            <p>{ props.task.title }</p>
        </div>
    )
}

export default Task;