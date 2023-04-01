export const createReducer =(state={data:null}, action)=>{
    // console.log(action.data)
    switch (action.type) {
        case 'products':
          return {...state, data: action?.data};
        default:
          return state
    }

}
