import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

// 单页面精简组件--记数器
class Counter extends React.Component {
  render(){
    const { value, onIncreaseClick,onDecreaseClick ,onMultiplyClick,onDivideClick,onZeroClick} = this.props;
    return (
      <div id="app">
        <span className="increase">当前数字是：{value} </span>
        <button className="btn btn-success increase-btn" onClick={onIncreaseClick}>加一</button>
        <button className="btn btn-danger increase-btn" onClick={onDecreaseClick}>减一</button>
        <button className="btn btn-primary increase-btn" onClick={onMultiplyClick}>乘二</button>
        <button className="btn btn-info  increase-btn" onClick={onDivideClick}>除二</button>
        <button className="btn btn-default" onClick={onZeroClick}>归零</button>
      </div>
    );
  }
}

// Action:type字段是必需的，其他字段自己随意定义
const increaseAction = {type: 'increase'};
const decreaseAction = {type: 'decrease'};
const multiplyAction = {type: 'multiply'};
const divideAction = {type: 'divide'};
const zeroAction = {type: 'zero'};


// Reducer:状态处理器
function counter(state={count: 0}, action) {
    let count = state.count;
  switch(action.type){
    case 'increase':
      return {count: count+1};
    case 'decrease':
      return {count: count-1};
    case 'multiply':
      return {count: count*2};
    case 'divide':
      return {count: count/2};
    case 'zero':
      return {count: 0};
    default:
      return state;
  }
}

// Store:
let store = createStore(counter);

// 注入Props
function mapStateToProps(state)  {
  return {
    value: state.count
  };
}

// 分发Action
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction),
    onDecreaseClick: () => dispatch(decreaseAction),
    onMultiplyClick: () => dispatch(multiplyAction),
    onDivideClick: () => dispatch(divideAction),
    onZeroClick: () => dispatch(zeroAction)
      
  };
}

// 封装组件
let App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
//表示这个js文件默认导出的是该类
export default React.createClass({
    render(){
       return <Provider store={store}><App /></Provider>
      }
})

