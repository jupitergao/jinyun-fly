import {createStore, combineReducers} from 'redux';

import {reducer as mainReducer} from './main';

const reducer = combineReducers({
    main: mainReducer
  });

export default createStore(reducer, {});