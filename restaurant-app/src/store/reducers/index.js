import {combineReducers} from 'redux';

import tables from './tables';
import waiters from './waiters';
import loader from './loader';

export default combineReducers({
    tables,
    waiters,
    loader

});
