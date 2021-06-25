
import filtersReducer from "./filters";
//import cartReducer from "./reducers/cart";
import pizzasReducer from "./pizzas";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
   filter: filtersReducer,
   pizzas: pizzasReducer

});


export default rootReducer;