import React from 'react';

function Task(props) {
    const classes = ['todo-item'];
    const { task } = props;

    if (task.done) {
        classes.push('done');
    }

    return (
        <div className = {classes.join(' ')}>
            <input type = "checkbox" checked = {task.done} onChange={() => props.toggleDone(task.id)}/>
            <p>{ task.title }</p>
        </div>
    )
}

export default Task;