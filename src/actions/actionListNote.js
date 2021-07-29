export const add = (note)=>({
    type:'ADD',
    payload:{
        note
    }
})

export const edit = (index,note)=>({
    type:'EDIT',
    payload:{
        note,
        index
    }
})

export const del =  (index)=>({
    type:'DELETE',
    payload:{
        index
    }
})
