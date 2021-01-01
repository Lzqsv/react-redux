 let defaultState ={
     count:0
 }

 function reduce(state=defaultState ,action){

    switch(action.type){
        case 'ADD' :
            state.count++
        return{
            ...state,
            count:state.count
        };
        case 'SUB':
            state.count--
        return{
            ...state,
            count:state.count
        };
    }
    return state 
 }

 export default reduce