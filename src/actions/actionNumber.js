//hành động tăng
export const incrementNumber = (step)=>({
  type: 'INCREMENT',
  payload: {
      step: step
  }
})

//hành động giảm
export const decrementNumber =(step)=>({
    type: 'DE_INCREMENT',
    payload: {
        step: step
    }
 })