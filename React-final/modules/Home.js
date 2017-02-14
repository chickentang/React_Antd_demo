import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

// React component
class Counter extends React.Component {
  render(){
    const { value, onIncreaseClick } = this.props;
    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
      </div>
    );
  }
}

// Action:type字段是必需的，其他字段自己随意定义
const increaseAction = {type: 'increase'};

// Reducer:
function counter(state={count: 0}, action) {
    let count = state.count;
  switch(action.type){
    case 'increase':
      return {count: count+1};
    default:
      return state;
  }
}

// Store:
let store = createStore(counter);

// Map Redux state to component props
function mapStateToProps(state)  {
  return {
    value: state.count
  };
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  };
}

// Connected Component:
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

