import React from 'react';
import Task from './components/Task';
import TaskInput from './components/TaskInput';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            tasks : [
                /*{id : 0, title : "First task", done : false},
                {id : 1, title : "Second task", done : true},
                {id : 2, title : "Third task", done : false},
                {id : 3, title : "Fourth task", done : false},*/
            ]
        };

        this.handleChange = this.handleChange.bind(this);
        this.addTask = this.addTask.bind(this);
    }

    addTask(task) {
        this.setState(prevState => {
            let tasks = prevState.tasks;
            tasks.push({
                id : tasks.length !== 0 ? tasks.length : 0,
                title : task,
                done : false
            });
            return tasks;
        })
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedTasks = prevState.tasks.map(task => {
                if (task.id === id) {
                    task.done = !task.done
                }
                return task;
            });
            console.log(updatedTasks);
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
                    <Task task = {task} key = { task.id } handleChange = {this.handleChange}/>
                )}
                </div>
                <TaskInput addTask = {this.addTask}/>
            </div>
        )
    }
}


export default App;
