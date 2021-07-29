export default function numberReducer(state,action){
    switch(action.type){
        case 'INCREMENT':
            return state+action.payload.step;

        case 'DE_INCREMENT':
            return state-action.payload.step;
        
        default:
            return 0;
    }
}