//添加任务
export const addTodo = ({label,time}) => {
    return {
        type:'ADD_TODO',
        time,
        label
    }
}
//点击一条记录
export const toggleTodo = (time) => {
    return {
        type:'TOGGLE_TODO',
        time
    }
}
//设置可见
export const setVisible = (filter) => {
    return {
        type:'SET_VISIBLE',
        filter
    }
}
//设置新的任务名称
export const setNewTaskName = (name) => {
    return {
        type:'SET_NEW_TASK_NAME',
        name
    }
}
//删除一条记录
export const deleteTodo = (time) => {
    return {
        type:'DELETE_TODO',
        time
    }
}
//Render 组件
export default {
    addTodo,toggleTodo,setVisible,setNewTaskName,deleteTodo
}
