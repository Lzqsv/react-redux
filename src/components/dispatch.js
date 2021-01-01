export default (dispatch)=>{
    return{
         addCount(type) {
           setTimeout(() => {
            dispatch({type})
           }, 1000);
        }

    }
}