import {createStore, combineReducers} from 'redux';

import {reducer as mainReducer} from './main';
import {reducer as homeReducer} from './home';

const reducer = combineReducers({
    main: mainReducer,
    home: homeReducer
});

export default createStore(reducer, {});