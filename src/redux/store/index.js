import {createStore , combineReducers} from 'redux';
import flagReducer from './../reducers/index.js'


const rootReducer = combineReducers({
    flags: flagReducer
});


function configureStore() {
    
 return createStore(rootReducer);
}

export default configureStore;
