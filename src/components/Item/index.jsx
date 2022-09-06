import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

    state = { mouse: false }

    mouseMove = (flag) => {
        return (() => {
            this.setState({ mouse: flag })
        })
    }

    handleCheck = (id) => {
        return ((event) => {
            //把input框的id传回给App去改变done状态
            this.props.changeChecked(id, event.target.checked)
        })
    }

    handleDelete = (id) => {
        return (() => {
            if (window.confirm("Are you sure remove this todo?")) this.props.deleteTodo(id)
        })
    }


    render() {
        const { id, name, done } = this.props.todo
        return (
            <li onMouseEnter={this.mouseMove(true)} onMouseLeave={this.mouseMove(false)} style={{ background: this.state.mouse ? '#ddd' : 'white' }}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" onClick={this.handleDelete(id)} style={{ display: this.state.mouse ? 'block' : 'none' }}>删除</button>
            </li>
        )
    }
}
