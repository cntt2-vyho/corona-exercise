import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducer';
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(function () {
    console.log(store.getState());
})

export default store;