import React from 'react';
import action from '../../actions/search';
import {connect} from 'react-redux';
let input;
let Input = ({newTaskName,dispatch}) => {
    let addTodos = (e) =>{
        let name = input.value.trim();
        if(name.length === 0 || e.keyCode !== 13){
            return;
        }
        dispatch(action.addTodo({
            label:name,
            time:Date.now()
        }));
        dispatch(action.setNewTaskName(''));
    }
    //(node)=>input=node 这一句也可以写成 node=>input=node 一个参数就可以不用括号
    return <input className="form-control search-input" ref={(node)=>input=node}  autofocus value={newTaskName}  type="text"  onKeyDown={addTodos}  onChange={()=>dispatch(action.setNewTaskName(input.value))} />
}
//基于全局	state	，注入props
//从全局state中传一些参数到当前组件，这个参数在Reduce中定义。
const mapStateToProps = (state)=>{
    if(state.todos.length === 0){
        input && input.focus();
    }
    return {newTaskName:state.newTaskName}
}


Input = connect(mapStateToProps)(Input);

export default Input;