import React from 'react';
import {Button, TextField} from '@material-ui/core';

class TaskInput extends React.Component {
    constructor(props) {
        super(props); 

        this.state = {
            input : '',
        };
    }
  
    keyEnterPress = event => {
        if (event.key === 'Enter') {
            this.addTask();
        }
    }

    addTask = (event) => {
        event.preventDefault();
        const { input } = this.state;
        const { addTask } = this.props;
        if (input) {
            addTask(input);
        }
        this.setState({ input : ''});
    }

    inputChange = event => {
        this.setState({ input : event.target.value });
    }

    render() {
        const { input } = this.state;
        return (
            <form onSubmit={this.addTask}>
                <TextField variant='standard' label='ToDo' onChange={(e) => this.inputChange(e)} value={input}/>
                <Button variant='contained' color='primary' type='submit'>ADD</Button>
            </form>
        )
    }
}

export default TaskInput;
