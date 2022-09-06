import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import './index.css'

export default class Header extends Component {

    handleInput = (event) => {
        const { value } = event.target
        if (event.keyCode === 13 && value.trim() !== "") {
            const todo = { id: nanoid(), name: value, done: false }
            //Pass todoObj to App.jsx
            this.props.acceptInput(todo)
        }
    }

    render() {
        return (
            <div className="todo-header">
                <input type="text" onKeyUp={this.handleInput} placeholder="请输入你的任务名称，按回车键确认" />
            </div>
        )
    }
}
