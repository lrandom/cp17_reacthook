import { getData } from "../services/dataService";
export default remoteData =>{
    return (dispatch)=>{
        dispatch(loading());
        getData().then((resp)=>{
            dispatch(getDataSuccess(resp));    
        }).catch((error)=>{
            dispatch(getDataFailed(error));    
        })
    }
}

const loading = ()=>{
   return {
        type: 'LOADING'
    }
}

const getDataSuccess = (resp)=>({
    type: 'GET_DATA_SUCCESS',
    payload: {
        resp
    }
})

const getDataFailed = (error)=>({
    type: 'GET_DATA_FAILED',
    payload:{
        error
    }
})