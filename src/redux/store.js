import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
// import tasksReducer from "./reducers/tasksReducer";
// import exportReducer from "./reducers/exportReducer";
// import {createRefreshMiddleware} from "./actions/authAction";
import postsReducer from "./reducers/postsReducer";

let reducers = combineReducers({
    posts: postsReducer,
});

const initialState = {};

export const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware()));

export default store;