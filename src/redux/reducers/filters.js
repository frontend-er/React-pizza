const initialState = {
   category: 0,
   sortBy: 'popylar'
}


const filters = (state = initialState, action) => {
   if (action.type === "SET_SOTR_BY") {
      return {
         ...state,
         sortBy: action.payload
      }

   }
   if (action.type === "SET_CATEGORY") {
      return {
         ...state,
         category: action.payload
      }

   }

   return state
}



export default filters;

