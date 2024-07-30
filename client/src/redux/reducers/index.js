import { combineReducers } from 'redux';
import someReducer from './someReducer'; // Ensure you have at least one reducer

const rootReducer = combineReducers({
    someState: someReducer
});

export default rootReducer;
