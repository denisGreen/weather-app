//import { configureStore } from '@reduxjs/toolkit';
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./Reducers";

// export default configureStore({
//   reducer: {
    
//   },
// });

const logMiddleware = ({ getState }) => next => action => {
  console.log("logMiddleware", action.type, getState());
  return next(action);
};

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logMiddleware),
  
);

export default store;


