import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {

    //初始化状态
    state = {todos:[
        {id:'001',name:'学习react技术；',done:'true'},
        {id:'002',name:'学习后端api；',done:'false'},
        {id:'003',name:'吃饭；',done:'false'},
    ]}

    //addToDo用于添加一个todo,接受的是todo对象
    addTodo = (todoObj)=>{
        //获取原todo
        const {todos} = this.state
        //追加一个todo
        const newTodos = [todoObj,...todos]
        //更新状态
        this.setState({todos:newTodos})
    }

    //updaTodo用于更新一个todo对象
    updateTodo = (id,done)=>{
        //获取状态中的todos
        const {todos} = this.state
        const newTodos =  todos.map((todoObj)=>{
            if(todoObj.id === id) return {...todoObj,done:done}
            else return todoObj
        })
        this.setState({todos:newTodos})
    }

    deleteTodo = (id)=>{
        const {todos} = this.state
        const newTodos = todos.filter((todoObj)=>{
            return todoObj.id !== id
        })
        this.setState({todos:newTodos})
    }

    render() {
        const {todos} = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <h3>任务便签（TodoList）</h3>
                    <h5>搜索任务：<input type="text" placeholder="输入关键词搜索"/></h5>
                    <h5>未分组任务：</h5>
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                    <h5>任务分组1：</h5>
                    <li>
                        <label>
                            <input className="checkbox" type="checkbox" value="aaaa"/>完成任务列表；
                            <input className="checkbox" type="checkbox" value="aaaa"/>完成删除任务；
                            <input className="checkbox" type="checkbox" value="aaaa"/>完成搜索任务；
                            <input className="checkbox" type="checkbox" value="aaaa"/>完成任务分组；
                            <input className="checkbox" type="checkbox" value="aaaa"/>完成任务打标签；
                        </label>
                    </li>
                    <Header addTodo={this.addTodo}/>
                    <Footer/>
                </div>
            </div>
        )
    }
}