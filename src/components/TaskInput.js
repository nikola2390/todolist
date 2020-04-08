import React from 'react';

class TaskInput extends React.Component {
    constructor(props) {
        super(props); 

        this.state = {
            input : ''
        };

        this.addTask = this.addTask.bind(this);
    }

    addTask() {
        const input = this.state.input;
        if (input) {
            this.props.addTask(input);
        }
        this.setState({ input : ''});
    }

    inputChange(event) {
        this.setState({ input : event.target.value });
        console.log(this.state);
    }

    render() {
        const input = this.state.input;
        return (
            <div>
                <input onChange = {(e) => this.inputChange(e)} value = { input }></input>
                <button onClick = {this.addTask}>ADD</button>
            </div>
        )
    }
}

export default TaskInput;