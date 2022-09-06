import React, { Component } from 'react'
import Item from '../Item'
import './index.css'

export default class List extends Component {
    render() {
        const { todos, changeChecked, deleteTodo } = this.props
        return (
            <ul className="todo-main">
                {
                    todos.map((todo) => {
                        return <Item key={todo.id} todo={todo} changeChecked={changeChecked} deleteTodo={deleteTodo} />
                    })
                }
            </ul>
        )
    }
}
