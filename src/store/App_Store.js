import {configureStore, createSlice} from "@reduxjs/toolkit"
 

 

 const counterSlice=createSlice({
    name: "calculator",
    initialState:{
        counter: "",
    },
    reducers:{ add:(state, action)=>{
          
          if(action.payload==="="){
            if(state.counter===""){
                return
            }
            state.counter = eval(state.counter);
            return 
          }
          else if(action.payload==="c"){
            state.counter="";
            return
          }
          else if(action.payload==="<-"){
              state.counter=state.counter.slice(0,-1);
              return
          }
          else if((action.payload==="/"||action.payload==="*" ||action.payload==="%" ) && (state.counter ===""||state.counter ==="+"||state.counter ==="-") ){
            return
          }
             
                state.counter+= (action.payload);
                return 
            
            
        }
    }
 })

 const counterStore=configureStore({
    reducer:{
        calculator: counterSlice.reducer,
    }
 })

 export const Action=counterSlice.actions
 export default counterStore