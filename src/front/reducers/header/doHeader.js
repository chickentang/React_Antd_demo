const doHeader = (state='',action)=>{
    switch(action.type){
        case 'DO_SUBMIT':
            return {"list":action.list};
        case 'DO_ADD':
            return {"list":action.list};
        case 'DO_MODIFY':
            return {"list":action.list};
        case 'DO_DELETE':
            return {"list":action.list};
        default:
            return state;
    }
}

export default doHeader;