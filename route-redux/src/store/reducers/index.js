import {combineReducers} from 'redux';
import groupsReducer from './groupsReducer';
import studentsReducer from './studentsReducer';


export default combineReducers({
    groups: groupsReducer,
    students: studentsReducer
});
