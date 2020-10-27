const initialState={
    message:'Subscribe to Simplilearn'
}

const reducer =(state=initialState,action)=>{
    const newState ={...state}
    if(action.type === 'Message Change'){
        newState.message ='Thank you for Subscribe'
    }

    return newState
}

export default reducer;