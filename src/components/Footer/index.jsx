import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

    //collect all checked button
    handleAllChecked = (event) => {
        //全选或取消全选,把当前是否勾选传过去
        this.props.allChecked(event.target.checked)
    }

    handleDeleteAllDone = () => {
        this.props.deleteAllDone()
    }

    render() {
        const { todos } = this.props
        const total = todos.length
        const doneCount = todos.reduce((pre, todo) => {
            return pre + (todo.done ? 1 : 0)
        }, 0)
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.handleAllChecked} checked={total === doneCount && doneCount > 0 ? true : false} />
                </label>
                <span>
                    <span>已完成{doneCount}</span> / 全部{total}
                </span>
                <button onClick={this.handleDeleteAllDone} className="btn btn-danger">清除已完成任务</button>
            </div>
        )
    }
}
