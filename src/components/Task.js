import React from 'react';
import classNames from 'classnames';

function Task(props) {
    const { task } = props;
    const classes = classNames({
        'todo-item': true,
        'done': task.done
    }) 

    return (
        <div className = {classes}>
            <input type = "checkbox" checked = {task.done} onChange={() => props.toggleDone(task.id)}/>
            <p>{ task.title }</p>
        </div>
    )
}

export default Task;