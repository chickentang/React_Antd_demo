import $ from 'jquery';
//处理逻辑都在Action中
//搜索内容的动作
export const doSearch = ({inputValue,seleValue})=>{
   let list = require("json!../../data/data.json");
    return {
        type:'DO_SUBMIT',
        list
    }
}
//添加一条记录
export const doAdd = ({current,data})=>{
    current.key = Math.random(10)+"tcf";
    current.address = current.residence.join(" - ").toString();
    data.push(current);
    const list = data;
    return {
        type:'DO_ADD',
        list
    }
}
//修改记录
export const doModify = ({current,data})=>{
    for(let i=0;i<data.length;i++){
        if(current.key == data[i].key){
            data[i] = current;
            data[i].address = current.residence.join(" - ");
            break;
        }
    }
    const list = data;
    return {
        type:'DO_MODIFY',
        list
    }
}
//删除记录
export const doDelete = ({record,data})=>{
    for(let i=0;i<data.length;i++){
        if(data[i].key == record.key){
            data.splice(i,1);
            break;
        }
    }
    let list = data;
    return {
        type:'DO_DELETE',
        list 
    }
}
//弹窗处理逻辑
export const showModal = ({current,data})=>{
    
    if(current.modalType == "add"){
        const temp = {};
        temp.title = current.title;
        temp.key = current.key;
        temp.modalType = current.modalType;
        data = [];
        current = temp;
    }else if(current.modalType == "modify"){
        current.residence = current.address.split(" - ");
    }
    return {
        type:'SHOW_MODAL',
        current,
        data
    }
    
}
//显示弹窗
export const setVisible = (isVisible)=>{
    return{
        type:"IS_VISIBLE",
        isVisible
    }
}
//设置缓冲效果
export const setLoading = (isLoading)=>{
    return {
        type:"IS_LOADING",
        isLoading
    }
}
//Render 组件
export default {
    doSearch,doAdd,doDelete,doModify,showModal,setVisible,setLoading
}