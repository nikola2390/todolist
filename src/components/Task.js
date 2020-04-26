import React from 'react';
import classNames from 'classnames';
import { Checkbox, ListItem, ListItemText } from '@material-ui/core'

function Task(props) {
    const { task } = props;
    const classes = classNames({
        'todo-item': true,
        'done': task.done
    }) 

    return (
        <ListItem className = {classes} divider='true'>
            <Checkbox color='primary' checked={task.done} onChange={() => props.toggleDone(task.id)}/>
            <ListItemText>{ task.title }</ListItemText>
        </ListItem>
    )
}

export default Task;