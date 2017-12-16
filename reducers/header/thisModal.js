const thisModal = (state={current:{"title":"添加"},data:[]},action)=>{
    switch(action.type){
        case 'SHOW_MODAL':
            return {current:action.current,data:action.data};
        default:
            return state;
    }
}

export default thisModal;