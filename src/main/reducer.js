import {CHANGE_TAB} from './actionTypes.js';

const initState = {
    tabindex: 0
}

export default (state = initState, action) => {
    switch(action.type) {
      case CHANGE_TAB: {
        return {...state, tabindex: action.index};
      }
      default: {
        return state;
      }
    }
}