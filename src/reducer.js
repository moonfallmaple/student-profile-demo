import {
  STORE_INIDATA,
  ADD_TAGS,
  REMOVE_TAGS
 } from './actions'



export default function reducer (state = {}, action) {

    switch(action.type) {

      //fetch data from api then store it to redux store
        case STORE_INIDATA:
       
            return { ...state, 
                  students:action.data    
            } 

        case ADD_TAGS:
     
          return {
              ...state,
                  students:{
                    ...state.students,
                    [action.id]:{
                      ...state.students[action.id],
                      tags:[...state.students[action.id].tags,action.inputValue]
                    }
                  }  
              }

        case REMOVE_TAGS:

          return {
              ...state,
                  students:{
                    ...state.students,
                    [action.id]:{
                      ...state.students[action.id],
                      tags:state.students[action.id].tags.filter((tag)=>(tag!==action.removedTag))
                    }
                  }  
              }

        default :
        return state
        
  }
}
