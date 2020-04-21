import React from 'react';

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

    addTask = () => {
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
            <div>
                <input onKeyPress={this.keyEnterPress} onChange={(e) => this.inputChange(e)} value={input}/>
                <button onClick={this.addTask} type="button">ADD</button>
            </div>
        )
    }
}

export default TaskInput;
