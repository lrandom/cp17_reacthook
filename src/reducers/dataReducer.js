let initState = {
    loading: false,
    list:[],
    getDataSuccess:false
}

export default function dataReducer(state=initState,action){
    switch(action.type){
        case 'LOADING':
            return {
                loading: true,
                list:[],
                getDataSuccess:false
            }

        case 'GET_DATA_SUCCESS':
            return {
                loading: false,
                list:action.payload.resp.data,
                getDataSuccess:true
            }

        case 'GET_DATA_FAILED':

            return {
                loading: false,
                list:[],
                getDataSuccess:false
            }
        
        default:
            return initState;
    }
}