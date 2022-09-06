import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

import './App.css'

export default class App extends Component {

    state = {
        'todos': [
            { id: '001', name: '吃饭', done: true },
            { id: '002', name: '睡觉', done: false },
            { id: '003', name: '打豆豆', done: false },
            { id: '004', name: '敲代码', done: false }
        ]
    }

    //provide a function to Header then callback the state
    acceptInput = (todoObj) => {
        const { todos } = this.state
        //add todoObje to todos Array
        const newTodos = [todoObj, ...todos]
        this.setState({ todos: newTodos })
    }

    //provide each todo state to Item then can change each done state
    changeChecked = (id, done) => {
        const { todos } = this.state
        const newTodos = todos.map((todo) => {
            if (todo.id === id) return { ...todo, done }
            return todo
        })
        this.setState({ todos: newTodos })
    }

    //delete One Todo
    deleteTodo = (id) => {
        const { todos } = this.state
        const newTodos = todos.filter((todoObj) => {
            return todoObj.id !== id
        })
        this.setState({ todos: newTodos })
    }

    //All checked button change
    allChecked = (flag) => {
        const { todos } = this.state
        const newTodos = todos.map((todo) => {
            return { ...todo, done: flag }
        })
        this.setState({ todos: newTodos })
    }

    //delete all done
    deleteAllDone = () => {
        const { todos } = this.state
        const newTodos = todos.filter((todo) => {
            return todo.done !== true
        })
        if (window.confirm('Are you sure remove All Done?')) this.setState({ todos: newTodos })
    }

    render() {
        const { todos } = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header acceptInput={this.acceptInput} />
                    <List todos={todos} changeChecked={this.changeChecked} deleteTodo={this.deleteTodo} />
                    <Footer todos={todos} allChecked={this.allChecked} deleteAllDone={this.deleteAllDone} />
                </div>
            </div>
        )
    }
}


