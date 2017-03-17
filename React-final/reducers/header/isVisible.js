const isVisible = (state=false,action)=>{
    switch(action.type){
        case 'IS_VISIBLE':
            return action.isVisible;
        default:
            return state;
    }
}
export default isVisible;