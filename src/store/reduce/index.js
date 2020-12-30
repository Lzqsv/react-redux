 let defaultState ={
     name:'lizhaungzhuang'
 }

 function reduce(state=defaultState ,action){

    switch(action.type){
        case 'SET_NAME' :
        return{
            ...state,
            name:action.name
        }
    }
 }