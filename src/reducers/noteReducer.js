export default function noteReducer(state,action){
    switch(action.type){
        case 'ADD':
            return state.push(action.payload.note);

        case 'EDIT':
            return state[action.payload.index]=action.payload.note

        case 'DELETE':
            return state.splice(action.payload.index)
        
        default:
            return [];
    }
}