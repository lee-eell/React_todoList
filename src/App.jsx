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

    //提供给Header传回状态回来！
    acceptInput = (todoObj) => {
        const { todos } = this.state
        //add todoObje to todos Array
        const newTodos = [todoObj, ...todos]
        this.setState({ todos: newTodos })
    }

    //提供给Item改变每条todo的done状态
    changeChecked = (id, done) => {
        const { todos } = this.state
        const newTodos = todos.map((todo) => {
            if (todo.id === id) return { ...todo, done }
            return todo
        })
        this.setState({ todos: newTodos })
    }

    //删除某一条todo
    deleteTodo = (id) => {
        const { todos } = this.state
        const newTodos = todos.filter((todoObj) => {
            return todoObj.id !== id
        })
        this.setState({ todos: newTodos })
    }

    allChecked = (flag) => {
        const { todos } = this.state
        const newTodos = todos.map((todo) => {
            return { ...todo, done: flag }
        })
        this.setState({ todos: newTodos })
    }

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


