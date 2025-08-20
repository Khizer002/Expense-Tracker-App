import React from "react";

const reducer=(state,action)=>{
    switch(action.type){
        case 'add':
            return [...state,{text:action.text,amount:action.amount}]
        case 'remove':
            return state.filter((item,i) => i!==action.index)
        default:
            return state
    }
}

export default reducer;