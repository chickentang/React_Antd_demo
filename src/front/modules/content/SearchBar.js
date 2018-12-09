import React from 'react';
import action from 'actions/content';//action中的Index.js是首先加载文件
import {connect} from 'react-redux';


let SearchBar = ({dispatch}) => {
    let input,select;
    //执行查询
    let doSearch = (e)=>{
        let inputValue = input.value.trim();
        let seleValue = select.value;
        dispatch(action.doSearch({inputValue,seleValue}));
    }
    //添加 点击
    let doAdd = (e)=>{
        let current = {title:"添加记录",modalType:"add"};
        let isVisible = true;
        const a = [];
        dispatch(action.setVisible(isVisible));
        dispatch(action.showModal({current,a}));
    }
    //(node)=>input=node 这一句也可以写成 node=>input=node 一个参数就可以不用括号
    return <form  className="from-zone" >
                <div className="form-zone ">
                        <ul>
                            <li className="form-li ">
                                <span className="form-span">项目名称：</span>
                                <div className="form-div">
                                    <input className="form-control" ref={(inp)=>input=inp} type="text" />
                                </div>
                            </li>
                            <li className="form-li ">
                                <span className="form-span">城市：</span>
                                <div className="form-div">
                                    <select  className="form-control" ref={(sel)=>select=sel}  >
                                      <option value="A">北京</option>
                                      <option value="B">深圳</option>
                                      <option value="C">上海</option>
                                    </select>
                                </div>
                            </li>
                            <li className="form-li">
                                <div className="from-div">
                                    <a className=" form-btn btn btn-info" href="javascript:;" onClick={doSearch} >查询</a>
                                    <a className=" form-btn btn btn-success margin10" href="javascript:;"  onClick={doAdd} >添加</a>
                                </div>
                            </li>
                        </ul>
                </div>
        </form>
}
//基于全局	state	，注入	props
//从全局state中传一些参数到当前组件，这个参数在Reduce中定义。
const mapStateToProps = (state)=>{
    return state;
}

SearchBar = connect(mapStateToProps)(SearchBar);

export default SearchBar;