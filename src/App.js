import React from 'react';
import Task from './components/Task';
import TaskInput from './components/TaskInput';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            tasks: [],
            id: 0,
        };
    }

    addTask = task => {
        this.setState(prevState => {
            return {
                tasks: [...prevState.tasks,{
                    id: prevState.id,
                    title: task,
                    done: false,
                }],
                id: prevState.id + 1,
            }
        })
    };

    toggleDone = id => {
        this.setState(prevState => {
            const updatedTasks = prevState.tasks.map(task => {
                const temp = task;
                if (temp.id === id) {
                    temp.done = !temp.done
                }
                return temp;
            });
            return updatedTasks;
        })
    }

    render() {
        const { tasks } = this.state;
        const activeTasks = tasks.filter(task => !task.done);

        return (
            <div className = 'todo-app'>
                <h1>To Do List</h1>
                <h2>Active tasks: { activeTasks.length }</h2>
                <div className = 'todo-list'>
                {tasks.map(task =>
                    <Task task={task} key={task.id} toggleDone={this.toggleDone}/>
                )}
                </div>
                <TaskInput addTask={this.addTask}/>
            </div>
        )
    }
}

export default App;
