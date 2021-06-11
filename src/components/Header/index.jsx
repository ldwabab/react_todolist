import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css'

export default class Header extends Component {

    static propTypes = {
        addTodo:PropTypes.func.isRequired
    }

    handleKeyUp = (event)=>{
        //解构赋值获取keyCode、target
        const {keyCode,target} = event
        //判断是否按了回车
        if(keyCode !==13) return

        if(target.value.trim() === ''){
            alert('输入不能为空')
            return
        }

        //准备好一个todo对象
        const todoObj ={id:nanoid(),name:target.value,done:false}
        //将todoObj传递给App
        this.props.addTodo(todoObj)
        target.value = ''
    }

    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车确认"/>
            </div>
        )
    }
}
